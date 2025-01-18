import React$1, { SVGProps, Dispatch, ReactNode } from 'react';
import { z } from 'zod';

type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};
interface Event {
    id: string;
    title: string;
    description?: string;
    startDate: Date;
    endDate: Date;
    variant?: Variant;
    event_type?: string;
    mentor_id?: string;
    profile_ids?: string[];
    created_at?: string;
    productData?: {
        id: string;
        title: string;
        description?: string;
        owner?: string;
        member_area_tool?: any[];
        product_id: string;
        learning_path_title?: string;
        module_id: string;
        module_title: string;
    };
}
interface SchedulerState {
    events: Event[];
}
type Action = {
    type: "ADD_EVENT";
    payload: Event;
} | {
    type: "REMOVE_EVENT";
    payload: {
        id: string;
    };
} | {
    type: "UPDATE_EVENT";
    payload: Event;
} | {
    type: "SET_EVENTS";
    payload: Event[];
};
interface Handlers {
    handleEventStyling: (event: Event, dayEvents: Event[]) => {
        height: string;
        left: string;
        maxWidth: string;
        minWidth: string;
        top: string;
        zIndex: number;
    };
    handleAddEvent: (event: Event) => void;
    handleUpdateEvent: (event: Event, id: string) => void;
    handleDeleteEvent: (id: string) => void;
}
interface Getters {
    getDaysInMonth: (month: number, year: number) => {
        day: number;
        events: Event[];
    }[];
    getEventsForDay: (day: number, currentDate: Date) => Event[];
    getDaysInWeek: (week: number, year: number) => Date[];
    getWeekNumber: (date: Date) => number;
    getDayName: (day: number) => string;
}
interface SchedulerContextType {
    events: SchedulerState;
    dispatch: Dispatch<Action>;
    getters: Getters;
    handlers: Handlers;
    weekStartsOn: startOfWeek;
    canEdit: (id: string) => boolean;
}
declare const variants: readonly ["success", "primary", "default", "warning", "danger"];
type Variant = (typeof variants)[number];
declare const eventSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    startDate: z.ZodDate;
    endDate: z.ZodDate;
    variant: z.ZodEnum<["primary", "danger", "success", "warning", "default"]>;
    color: z.ZodString;
    productData: z.ZodOptional<z.ZodObject<{
        product_id: z.ZodString;
        product_title: z.ZodString;
        learning_path_title: z.ZodOptional<z.ZodString>;
        module_id: z.ZodString;
        module_title: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        product_id: string;
        product_title: string;
        module_id: string;
        module_title: string;
        learning_path_title?: string | undefined;
    }, {
        product_id: string;
        product_title: string;
        module_id: string;
        module_title: string;
        learning_path_title?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    title: string;
    color: string;
    startDate: Date;
    endDate: Date;
    variant: "success" | "primary" | "default" | "warning" | "danger";
    id?: string | undefined;
    description?: string | undefined;
    productData?: {
        product_id: string;
        product_title: string;
        module_id: string;
        module_title: string;
        learning_path_title?: string | undefined;
    } | undefined;
}, {
    title: string;
    color: string;
    startDate: Date;
    endDate: Date;
    variant: "success" | "primary" | "default" | "warning" | "danger";
    id?: string | undefined;
    description?: string | undefined;
    productData?: {
        product_id: string;
        product_title: string;
        module_id: string;
        module_title: string;
        learning_path_title?: string | undefined;
    } | undefined;
}>;
type EventFormData = z.infer<typeof eventSchema>;
type Views = {
    mobileViews?: string[];
    views?: string[];
};
type startOfWeek = "sunday" | "monday";
interface CustomEventModal {
    CustomAddEventModal?: {
        title?: string;
        CustomForm?: React.FC<{
            register: any;
            errors: any;
        }>;
        ProductData?: {
            product_id: string;
            product_title: string;
            learning_path_title?: string;
            module_id: string;
            module_title: string;
        }[];
    };
}
interface CustomComponents {
    customButtons?: {
        CustomAddEventButton?: React.ReactNode;
        CustomPrevButton?: React.ReactNode;
        CustomNextButton?: React.ReactNode;
    };
    customTabs?: {
        CustomDayTab?: React.ReactNode;
        CustomWeekTab?: React.ReactNode;
        CustomMonthTab?: React.ReactNode;
    };
    CustomEventComponent?: React.FC<Event>;
    CustomEventModal?: CustomEventModal;
}
interface ButtonClassNames {
    prev?: string;
    next?: string;
    addEvent?: string;
}
interface TabClassNames {
    view?: string;
}
interface TabsClassNames {
    cursor?: string;
    panel?: string;
    tab?: string;
    tabContent?: string;
    tabList?: string;
    wrapper?: string;
}
interface ViewClassNames {
    dayView?: string;
    weekView?: string;
    monthView?: string;
}
interface ClassNames {
    event?: string;
    buttons?: ButtonClassNames;
    tabs?: TabsClassNames;
    views?: ViewClassNames;
}

declare const SchedulerProvider: ({ children, onAddEvent, onUpdateEvent, onDeleteEvent, initialState, weekStartsOn, canEdit, }: {
    onAddEvent?: ((event: Event) => void) | undefined;
    onUpdateEvent?: ((event: Event) => void) | undefined;
    onDeleteEvent?: ((id: string) => void) | undefined;
    weekStartsOn?: startOfWeek | undefined;
    children: ReactNode;
    initialState?: Event[] | undefined;
    canEdit?: ((id: string) => boolean) | undefined;
}) => React$1.JSX.Element;
declare const useScheduler: () => SchedulerContextType;

declare function SchedulerViewFilteration({ views, CustomComponents, classNames, }: {
    views?: Views;
    CustomComponents?: CustomComponents;
    classNames?: ClassNames;
}): React$1.JSX.Element;

export { type Action, type ButtonClassNames, type ClassNames, type CustomComponents, type CustomEventModal, type Event, type EventFormData, type Getters, type Handlers, type IconSvgProps, SchedulerViewFilteration as SchedularView, type SchedulerContextType, SchedulerProvider, type SchedulerState, type TabClassNames, type TabsClassNames, type Variant, type ViewClassNames, type Views, eventSchema, type startOfWeek, useScheduler, variants };
