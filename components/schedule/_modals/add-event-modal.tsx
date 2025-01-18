"use client";

import React, { useEffect, useState } from "react";
import { ModalFooter } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

import { useModalContext } from "@/providers/modal-provider";
import SelectDate from "@/components/schedule/_components/add-event-components/select-date";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EventFormData, eventSchema, Variant, Event } from "@/types/index";
import { useScheduler } from "@/providers/schedular-provider";
import { v4 as uuidv4 } from "uuid"; // Use UUID to generate event IDs

interface ProductData {
  product_id: string;
  product_title: string;
  learning_path_title?: string;
  module_id: string;
  module_title: string;
}

export default function AddEventModal({
  CustomAddEventModal,
  productData,
  readOnly = true,
}: {
  CustomAddEventModal?: React.FC<{ register: any; errors: any }>;
  productData?: ProductData[];
  readOnly?: boolean;
}) {
  const { onClose, data } = useModalContext();
  const [selectedColor, setSelectedColor] = useState<string>(
    getEventColor(data?.variant || "primary")
  );
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [selectedPath, setSelectedPath] = useState<string>("");
  const [selectedModule, setSelectedModule] = useState<string>("");

  const filteredPaths = productData
    ?.filter((item) => item.product_id === selectedProduct)
    .map((item) => item.learning_path_title)
    .filter((value, index, self) => value && self.indexOf(value) === index);

  const filteredModules = productData
    ?.filter(
      (item) =>
        item.product_id === selectedProduct &&
        (!selectedPath || item.learning_path_title === selectedPath)
    )
    .map((item) => ({
      id: item.module_id,
      title: item.module_title,
    }))
    .filter((value, index, self) => 
      self.findIndex(m => m.id === value.id) === index
    );

  const uniqueProducts = productData
    ?.map((item) => ({
      id: item.product_id,
      title: item.product_title,
    }))
    .filter((value, index, self) => 
      self.findIndex(p => p.id === value.id) === index
    );

  const typedData = data as Event;

  const { handlers } = useScheduler();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(),
      variant: data?.variant || "primary",
      color: data?.color || "blue",
    },
  });

  // Reset the form on initialization
  useEffect(() => {
    if (data) {
      reset({
        title: data.title,
        description: data.description || "",
        startDate: data.startDate,
        endDate: data.endDate,
        variant: data.variant || "primary",
        color: data.color || "blue",
      });
    }
  }, [data, reset]);

  const colorOptions = [
    { key: "blue", name: "Marrom" },
    { key: "red", name: "Vermelho" },
    { key: "green", name: "Verde" },
    { key: "yellow", name: "Amarelo" },
  ];

  function getEventColor(variant: Variant) {
    switch (variant) {
      case "primary":
        return "blue";
      case "danger":
        return "red";
      case "success":
        return "green";
      case "warning":
        return "yellow";
      default:
        return "blue";
    }
  }

  function getEventStatus(color: string) {
    switch (color) {
      case "blue":
        return "primary";
      case "red":
        return "danger";
      case "green":
        return "success";
      case "yellow":
        return "warning";
      default:
        return "default";
    }
  }

  const onSubmit: SubmitHandler<EventFormData> = (formData) => {
    const selectedProductData = productData?.find(
      (item) =>
        item.product_id === selectedProduct &&
        (!selectedPath || item.learning_path_title === selectedPath) &&
        item.module_id === selectedModule
    );

    const removeHtmlTags = (str: string): string => {
      return str?.replace(/<[^>]*>/g, "");
    };

    const newEvent: Event = {
      id: uuidv4(),
      title: formData.title,
      startDate: formData.startDate,
      endDate: formData.endDate,
      variant: formData.variant,
      description: removeHtmlTags(formData.description || ""),
      productData: selectedProductData ? {
        product_id: selectedProductData.product_id,
        product_title: selectedProductData.product_title,
        learning_path_title: selectedProductData.learning_path_title,
        module_id: selectedProductData.module_id,
        module_title: selectedProductData.module_title,
      } : undefined,
    };

    if (!data?.id) handlers.handleAddEvent(newEvent);
    else handlers.handleUpdateEvent(newEvent, data?.id);
    onClose();
  };

  return (
    <form 
      className="flex flex-col gap-3 max-h-[80vh] overflow-y-auto pr-2" 
      onSubmit={handleSubmit(onSubmit)}
    >
      {CustomAddEventModal ? (
        CustomAddEventModal({ register, errors })
      ) : (
        <>
          {readOnly ? (
            <div className="w-full p-3 rounded-medium bg-default-100" dangerouslySetInnerHTML={{ __html: data?.title || '' }} />
          ) : (
            <Input
              {...register("title")}
              label="Nome do Evento"
              placeholder="Digite o nome do evento"
              variant="flat"
              isReadOnly={readOnly}
              isInvalid={!!errors.title}
              errorMessage={errors.title?.message}
            />
          )}
          {readOnly ? (
            <div 
              className="w-full min-h-fit overflow-y-auto p-3 rounded-medium bg-default-100"
              dangerouslySetInnerHTML={{ 
                __html: data?.description || ''
              }} 
            />
          ) : (
            <Textarea
              {...register("description")}
              label="Descrição do Evento"
              placeholder="Digite a descrição do evento"
              variant="flat"
            />
          )}
          <SelectDate data={data} setValue={setValue} readOnly={readOnly}/>

          {productData && productData.length > 0 && (
            <div className="flex flex-col gap-3">
              {readOnly ? (
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-default-700">Conteúdo</span>
                  <div className="w-full p-3 rounded-medium bg-default-100">
                    {uniqueProducts?.find(p => p.id === selectedProduct)?.title || ''}
                  </div>
                </div>
              ) : (
                <Select
                  label="Conteúdo"
                  placeholder="Selecione um conteúdo"
                  value={selectedProduct}
                  variant="flat"
                  onChange={(e) => {
                    setSelectedProduct(e.target.value);
                    setSelectedPath("");
                    setSelectedModule("");
                  }}
                >
                  {(uniqueProducts || []).map((product) => (
                    <SelectItem key={product.id} value={product.id}>
                      {product.title}
                    </SelectItem>
                  ))}
                </Select>
              )}

              {filteredPaths && filteredPaths.length > 0 && (
                readOnly ? (
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-default-700">Trilha</span>
                    <div className="w-full p-3 rounded-medium bg-default-100">
                      {selectedPath || ''}
                    </div>
                  </div>
                ) : (
                  <Select
                    label="Trilha"
                    placeholder="Selecione uma trilha (opcional)"
                    value={selectedPath}
                    variant="flat"
                    onChange={(e) => {
                      setSelectedPath(e.target.value);
                      setSelectedModule("");
                    }}
                  >
                    {filteredPaths.map((path) => (
                      <SelectItem key={path} value={path}>
                        {path}
                      </SelectItem>
                    ))}
                  </Select>
                )
              )}

              {filteredModules && filteredModules.length > 0 && (
                readOnly ? (
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-default-700">Módulo</span>
                    <div className="w-full p-3 rounded-medium bg-default-100">
                      {filteredModules.find(m => m.id === selectedModule)?.title || ''}
                    </div>
                  </div>
                ) : (
                  <Select
                    label="Módulo"
                    placeholder="Selecione um módulo"
                    value={selectedModule}
                    variant="flat"
                    onChange={(e) => setSelectedModule(e.target.value)}
                  >
                    {filteredModules.map((module) => (
                      <SelectItem key={module.id} value={module.id}>
                        {module.title}
                      </SelectItem>
                    ))}
                  </Select>
                )
              )}
            </div>
          )}

          {!readOnly && <Dropdown backdrop="blur">
            <DropdownTrigger>
              <Button
                variant="flat"
                className="justify-between w-fit my-4"
                color={getEventStatus(selectedColor)}
              >
                {
                  colorOptions.find((color) => color.key === selectedColor)
                    ?.name
                }
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Color selection"
              variant="flat"
              selectionMode="single"
              selectedKeys={[selectedColor]}
              onSelectionChange={(keys) => {
                const color = (keys.currentKey as string) || "blue";
                setSelectedColor(color);

                reset((formData) => ({
                  ...formData,
                  variant: getEventStatus(color),
                }));
              }}
            >
              {colorOptions.map((color) => (
                <DropdownItem
                  key={color.key}
                  startContent={
                    <div
                      className={`w-4 h-4 rounded-full bg-${color.key}-500`}
                    />
                  }
                >
                  {color.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>}

            {readOnly && <ModalFooter className="px-0">
              <Button color="primary" variant="flat" onPress={onClose}>
                Fechar
              </Button>
            </ModalFooter>}
          {!readOnly && <ModalFooter className="px-0">
            <Button color="danger" variant="light" onPress={onClose}>
              Cancelar
            </Button>
            <Button color="primary" type="submit">
              Salvar Evento
            </Button>
          </ModalFooter>}
        </>
      )}
    </form>
  );
}
