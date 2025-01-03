'use strict';
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var React9 = require('react');
var modal = require('@nextui-org/modal');
var framerMotion = require('framer-motion');
var button = require('@nextui-org/button');
var tabs = require('@nextui-org/tabs');
var lucideReact = require('lucide-react');
var bs = require('react-icons/bs');
var input = require('@nextui-org/input');
var select = require('@nextui-org/select');
var dropdown = require('@nextui-org/dropdown');
var date = require('@internationalized/date');
var datePicker = require('@nextui-org/date-picker');
var dateInput = require('@nextui-org/date-input');
var reactHookForm = require('react-hook-form');
var zod$1 = require('@hookform/resolvers/zod');
var zod = require('zod');
var uuid = require('uuid');
var chip = require('@nextui-org/chip');
var card = require('@nextui-org/card');
var clsx = require('clsx');
function _interopDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}
var React9__default = /*#__PURE__*/ _interopDefault(React9);
var clsx__default = /*#__PURE__*/ _interopDefault(clsx);
// providers/schedular-provider.tsx
var ModalContext = React9.createContext(void 0);
var ModalProvider = function(param) {
    var children = param.children;
    var _React9_useState = _sliced_to_array(React9.useState(null), 2), modalContent = _React9_useState[0], setModalContent = _React9_useState[1];
    var _React9_useState1 = _sliced_to_array(React9.useState(null), 2), data = _React9_useState1[0], setData = _React9_useState1[1];
    var _modal_useDisclosure = modal.useDisclosure(), isOpen = _modal_useDisclosure.isOpen, onOpen = _modal_useDisclosure.onOpen, onClose = _modal_useDisclosure.onClose;
    var showModal = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(param) {
            var title, body, footer, modalClassName, getter, result, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        title = param.title, body = param.body, footer = param.footer, modalClassName = param.modalClassName, getter = param.getter;
                        setModalContent({
                            title: title,
                            body: body,
                            footer: footer,
                            modalClassName: modalClassName
                        });
                        if (!getter) return [
                            3,
                            5
                        ];
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            getter()
                        ];
                    case 2:
                        result = _state.sent();
                        setData(result);
                        return [
                            3,
                            4
                        ];
                    case 3:
                        error = _state.sent();
                        console.error("Error fetching data:", error);
                        setData(null);
                        return [
                            3,
                            4
                        ];
                    case 4:
                        return [
                            3,
                            6
                        ];
                    case 5:
                        setData(null);
                        _state.label = 6;
                    case 6:
                        onOpen();
                        return [
                            2
                        ];
                }
            });
        });
        return function showModal(_) {
            return _ref.apply(this, arguments);
        };
    }();
    return /* @__PURE__ */ React9__default.default.createElement(ModalContext.Provider, {
        value: {
            showModal: showModal,
            onClose: onClose,
            data: data
        }
    }, children, /* @__PURE__ */ React9__default.default.createElement(modal.Modal, {
        backdrop: "blur",
        classNames: {
            backdrop: "max-h-screen overflow-hidden",
            wrapper: "max-h-screen overflow-hidden"
        },
        isOpen: isOpen,
        onOpenChange: onClose
    }, /* @__PURE__ */ React9__default.default.createElement(modal.ModalContent, {
        className: (modalContent === null || modalContent === void 0 ? void 0 : modalContent.modalClassName) || ""
    }, modalContent && /* @__PURE__ */ React9__default.default.createElement(React9__default.default.Fragment, null, modalContent.title && /* @__PURE__ */ React9__default.default.createElement(modal.ModalHeader, null, modalContent.title), modalContent.body && /* @__PURE__ */ React9__default.default.createElement(modal.ModalBody, null, modalContent.body), modalContent.footer && /* @__PURE__ */ React9__default.default.createElement(modal.ModalFooter, null, modalContent.footer)))));
};
var useModalContext = function() {
    var context = React9.useContext(ModalContext);
    if (!context) {
        throw new Error("useModalContext must be used within a ModalProvider");
    }
    return context;
};
// providers/schedular-provider.tsx
var schedulerReducer = function(state, action) {
    switch(action.type){
        case "ADD_EVENT":
            return _object_spread_props(_object_spread({}, state), {
                events: _to_consumable_array(state.events).concat([
                    action.payload
                ])
            });
        case "REMOVE_EVENT":
            return _object_spread_props(_object_spread({}, state), {
                events: state.events.filter(function(event) {
                    return event.id !== action.payload.id;
                })
            });
        case "UPDATE_EVENT":
            return _object_spread_props(_object_spread({}, state), {
                events: state.events.map(function(event) {
                    return event.id === action.payload.id ? action.payload : event;
                })
            });
        case "SET_EVENTS":
            return _object_spread_props(_object_spread({}, state), {
                events: action.payload
            });
        default:
            return state;
    }
};
var SchedulerContext = React9.createContext(void 0);
var SchedulerProvider = function(param) {
    var children = param.children, onAddEvent = param.onAddEvent, onUpdateEvent = param.onUpdateEvent, onDeleteEvent = param.onDeleteEvent, initialState = param.initialState, _param_weekStartsOn = param.weekStartsOn, weekStartsOn = _param_weekStartsOn === void 0 ? "sunday" : _param_weekStartsOn;
    var handleEventStyling = function handleEventStyling(event, dayEvents) {
        var eventsOnHour = dayEvents.filter(function(e) {
            return e.startDate < event.endDate && e.endDate > event.startDate;
        });
        var numEventsOnHour = eventsOnHour.length || 1;
        var indexOnHour = eventsOnHour.indexOf(event);
        var eventHeight = 0;
        var maxHeight = 0;
        var eventTop = 0;
        if (_instanceof(event.startDate, Date) && _instanceof(event.endDate, Date)) {
            var startTime = event.startDate.getHours() * 60 + event.startDate.getMinutes();
            var endTime = event.endDate.getHours() * 60 + event.endDate.getMinutes();
            var diffInMinutes = endTime - startTime;
            eventHeight = diffInMinutes / 60 * 64;
            var eventStartHour = event.startDate.getHours() + event.startDate.getMinutes() / 60;
            var dayEndHour = 24;
            maxHeight = Math.max(0, (dayEndHour - eventStartHour) * 64);
            eventHeight = Math.min(eventHeight, maxHeight);
            eventTop = eventStartHour * 64;
        } else {
            console.error("Invalid event or missing start/end dates.");
        }
        return {
            height: "".concat(eventHeight < 10 ? 20 : eventHeight > maxHeight ? maxHeight : eventHeight, "px"),
            top: "".concat(eventTop, "px"),
            zIndex: indexOnHour + 1,
            left: "".concat(indexOnHour * 100 / numEventsOnHour, "%"),
            maxWidth: "".concat(100 / numEventsOnHour, "%"),
            minWidth: "".concat(100 / numEventsOnHour, "%")
        };
    };
    var handleAddEvent = function handleAddEvent(event) {
        dispatch({
            type: "ADD_EVENT",
            payload: event
        });
        if (onAddEvent) {
            onAddEvent(event);
        }
    };
    var handleUpdateEvent = function handleUpdateEvent(event, id) {
        dispatch({
            type: "UPDATE_EVENT",
            payload: _object_spread_props(_object_spread({}, event), {
                id: id
            })
        });
        if (onUpdateEvent) {
            onUpdateEvent(event);
        }
    };
    var handleDeleteEvent = function handleDeleteEvent(id) {
        dispatch({
            type: "REMOVE_EVENT",
            payload: {
                id: id
            }
        });
        if (onDeleteEvent) {
            onDeleteEvent(id);
        }
    };
    var _React9_useReducer = _sliced_to_array(React9.useReducer(schedulerReducer, {
        events: initialState !== null && initialState !== void 0 ? initialState : []
    }), 2), state = _React9_useReducer[0], dispatch = _React9_useReducer[1];
    React9.useEffect(function() {
        if (initialState) {
            dispatch({
                type: "SET_EVENTS",
                payload: initialState
            });
        }
    }, [
        initialState
    ]);
    var getDaysInMonth = function(month, year) {
        return Array.from({
            length: new Date(year, month + 1, 0).getDate()
        }, function(_, index) {
            return {
                day: index + 1,
                events: []
            };
        });
    };
    var getDaysInWeek = function(week, year) {
        var startDay = weekStartsOn === "sunday" ? 0 : 1;
        var janFirst = new Date(year, 0, 1);
        var janFirstDayOfWeek = janFirst.getDay();
        var weekStart = new Date(janFirst);
        weekStart.setDate(janFirst.getDate() + (week - 1) * 7 + (startDay - janFirstDayOfWeek + 7) % 7);
        var days = [];
        for(var i = 0; i < 7; i++){
            var day = new Date(weekStart);
            day.setDate(day.getDate() + i);
            days.push(day);
        }
        return days;
    };
    var getWeekNumber = function(date) {
        var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        var weekNo = Math.ceil(((d.getTime() - yearStart.getTime()) / 864e5 + 1) / 7);
        return weekNo;
    };
    var getEventsForDay = function(day, currentDate) {
        return state === null || state === void 0 ? void 0 : state.events.filter(function(event) {
            var eventStart = new Date(event.startDate);
            var eventEnd = new Date(event.endDate);
            var startOfDay = new Date(currentDate);
            startOfDay.setDate(day);
            startOfDay.setHours(0, 0, 0, 0);
            var endOfDay = new Date(currentDate);
            endOfDay.setDate(day + 1);
            endOfDay.setHours(0, 0, 0, 0);
            var isSameDay = eventStart.getDate() === day && eventStart.getMonth() === currentDate.getMonth() && eventStart.getFullYear() === currentDate.getFullYear();
            var isSpanningDay = eventStart < endOfDay && eventEnd >= startOfDay;
            return isSameDay || isSpanningDay;
        });
    };
    var getDayName = function(day) {
        var days = [
            "Dom",
            "Seg",
            "Ter",
            "Qua",
            "Qui",
            "Sex",
            "S\xE1b"
        ];
        return days[day];
    };
    var getters = {
        getDaysInMonth: getDaysInMonth,
        getEventsForDay: getEventsForDay,
        getDaysInWeek: getDaysInWeek,
        getWeekNumber: getWeekNumber,
        getDayName: getDayName
    };
    var handlers = {
        handleEventStyling: handleEventStyling,
        handleAddEvent: handleAddEvent,
        handleUpdateEvent: handleUpdateEvent,
        handleDeleteEvent: handleDeleteEvent
    };
    return /* @__PURE__ */ React9__default.default.createElement(SchedulerContext.Provider, {
        value: {
            events: state,
            dispatch: dispatch,
            getters: getters,
            handlers: handlers,
            weekStartsOn: weekStartsOn
        }
    }, /* @__PURE__ */ React9__default.default.createElement(ModalProvider, null, children));
};
var useScheduler = function() {
    var context = React9.useContext(SchedulerContext);
    if (!context) {
        throw new Error("useScheduler must be used within a SchedulerProvider");
    }
    return context;
};
function getFormattedDate(date) {
    return "".concat(date.getFullYear(), "-").concat(String(date.getMonth() + 1).padStart(2, "0"), "-").concat(String(date.getDate()).padStart(2, "0"));
}
function calendarDateToJSDate(calendarDate) {
    var year = calendarDate.year, month = calendarDate.month, day = calendarDate.day;
    return new Date(year, month - 1, day);
}
function SelectDate(param) {
    var data = param.data, setValue = param.setValue;
    var _data_startDate, _data_startDate1, _data_endDate, _data_endDate1;
    var _React9_useState = _sliced_to_array(React9.useState({
        startDate: data ? date.parseDate(getFormattedDate(data === null || data === void 0 ? void 0 : data.startDate)) : date.parseDate("2024-04-06"),
        endDate: data ? date.parseDate(getFormattedDate(data === null || data === void 0 ? void 0 : data.endDate)) : date.parseDate("2024-04-10"),
        startTime: new date.Time((data === null || data === void 0 ? void 0 : (_data_startDate = data.startDate) === null || _data_startDate === void 0 ? void 0 : _data_startDate.getHours()) || 0, (data === null || data === void 0 ? void 0 : (_data_startDate1 = data.startDate) === null || _data_startDate1 === void 0 ? void 0 : _data_startDate1.getMinutes()) || 0),
        endTime: new date.Time((data === null || data === void 0 ? void 0 : (_data_endDate = data.endDate) === null || _data_endDate === void 0 ? void 0 : _data_endDate.getHours()) || 0, (data === null || data === void 0 ? void 0 : (_data_endDate1 = data.endDate) === null || _data_endDate1 === void 0 ? void 0 : _data_endDate1.getMinutes()) || 0)
    }), 2), dateState = _React9_useState[0], setDateState = _React9_useState[1];
    React9.useEffect(function() {
        var _dateState_startTime, _dateState_startTime1, _dateState_endTime, _dateState_endTime1;
        if (!dateState) return;
        var jsStartDate = calendarDateToJSDate(dateState.startDate);
        var jsEndDate = calendarDateToJSDate(dateState.endDate);
        jsStartDate.setHours((dateState === null || dateState === void 0 ? void 0 : (_dateState_startTime = dateState.startTime) === null || _dateState_startTime === void 0 ? void 0 : _dateState_startTime.hour) || 0);
        jsStartDate.setMinutes((dateState === null || dateState === void 0 ? void 0 : (_dateState_startTime1 = dateState.startTime) === null || _dateState_startTime1 === void 0 ? void 0 : _dateState_startTime1.minute) || 0);
        jsEndDate.setHours((dateState === null || dateState === void 0 ? void 0 : (_dateState_endTime = dateState.endTime) === null || _dateState_endTime === void 0 ? void 0 : _dateState_endTime.hour) || 0);
        jsEndDate.setMinutes((dateState === null || dateState === void 0 ? void 0 : (_dateState_endTime1 = dateState.endTime) === null || _dateState_endTime1 === void 0 ? void 0 : _dateState_endTime1.minute) || 0);
        if (jsEndDate < jsStartDate) {
            jsEndDate.setHours(jsStartDate.getHours() + 1);
        }
        setValue("startDate", jsStartDate);
        setValue("endDate", jsEndDate);
    }, [
        dateState,
        setValue
    ]);
    return /* @__PURE__ */ React9__default.default.createElement("div", null, /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "w-full flex gap-4 max-w-full flex-wrap"
    }, /* @__PURE__ */ React9__default.default.createElement(datePicker.DateRangePicker, {
        label: "Dura\xE7\xE3o do Evento",
        isRequired: true,
        value: {
            start: dateState.startDate,
            end: dateState.endDate
        },
        className: "w-full",
        onChange: function(value) {
            var start = value === null || value === void 0 ? void 0 : value.start;
            var end = value === null || value === void 0 ? void 0 : value.end;
            var startDate = new Date((start === null || start === void 0 ? void 0 : start.year) || 0, ((start === null || start === void 0 ? void 0 : start.month) || 1) - 1, (start === null || start === void 0 ? void 0 : start.day) || 1);
            var endDate = new Date((end === null || end === void 0 ? void 0 : end.year) || 0, ((end === null || end === void 0 ? void 0 : end.month) || 1) - 1, (end === null || end === void 0 ? void 0 : end.day) || 1);
            setDateState(_object_spread_props(_object_spread({}, dateState), {
                startDate: date.parseDate(getFormattedDate(startDate)),
                endDate: date.parseDate(getFormattedDate(endDate))
            }));
        }
    }), /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "flex flex-wrap gap-4"
    }, /* @__PURE__ */ React9__default.default.createElement(dateInput.TimeInput, {
        label: "Hora de In\xEDcio",
        defaultValue: dateState === null || dateState === void 0 ? void 0 : dateState.startTime,
        onChange: function(e) {
            setDateState(_object_spread_props(_object_spread({}, dateState), {
                startTime: e || new date.Time(0, 0)
            }));
        }
    }), /* @__PURE__ */ React9__default.default.createElement(dateInput.TimeInput, {
        label: "Hora de T\xE9rmino",
        defaultValue: dateState === null || dateState === void 0 ? void 0 : dateState.endTime,
        onChange: function(e) {
            setDateState(_object_spread_props(_object_spread({}, dateState), {
                endTime: e || new date.Time(0, 0)
            }));
        },
        isInvalid: (dateState === null || dateState === void 0 ? void 0 : dateState.startTime) && (dateState === null || dateState === void 0 ? void 0 : dateState.endTime) && dateState.endTime.hour * 60 + dateState.endTime.minute <= dateState.startTime.hour * 60 + dateState.startTime.minute
    }))));
}
var variants = [
    "success",
    "primary",
    "default",
    "warning",
    "danger"
];
var eventSchema = zod.z.object({
    title: zod.z.string().nonempty("Event name is required"),
    description: zod.z.string().optional(),
    startDate: zod.z.date(),
    endDate: zod.z.date(),
    variant: zod.z.enum([
        "primary",
        "danger",
        "success",
        "warning",
        "default"
    ]),
    color: zod.z.string().nonempty("Color selection is required")
});
function AddEventModal(param) {
    var CustomAddEventModal = param.CustomAddEventModal, productData = param.productData;
    var _errors_title, _colorOptions_find;
    var _useModalContext = useModalContext(), onClose = _useModalContext.onClose, data = _useModalContext.data;
    var _React9_useState = _sliced_to_array(React9.useState(getEventColor((data === null || data === void 0 ? void 0 : data.variant) || "primary")), 2), selectedColor = _React9_useState[0], setSelectedColor = _React9_useState[1];
    var _React9_useState1 = _sliced_to_array(React9.useState(""), 2), selectedProduct = _React9_useState1[0], setSelectedProduct = _React9_useState1[1];
    var _React9_useState2 = _sliced_to_array(React9.useState(""), 2), selectedPath = _React9_useState2[0], setSelectedPath = _React9_useState2[1];
    var _React9_useState3 = _sliced_to_array(React9.useState(""), 2), selectedModule = _React9_useState3[0], setSelectedModule = _React9_useState3[1];
    var filteredPaths = productData === null || productData === void 0 ? void 0 : productData.filter(function(item) {
        return item.product_id === selectedProduct;
    }).map(function(item) {
        return item.learning_path_title;
    }).filter(function(value, index, self) {
        return value && self.indexOf(value) === index;
    });
    var filteredModules = productData === null || productData === void 0 ? void 0 : productData.filter(function(item) {
        return item.product_id === selectedProduct && (!selectedPath || item.learning_path_title === selectedPath);
    }).map(function(item) {
        return {
            id: item.module_id,
            title: item.module_title
        };
    }).filter(function(value, index, self) {
        return self.findIndex(function(m) {
            return m.id === value.id;
        }) === index;
    });
    var uniqueProducts = productData === null || productData === void 0 ? void 0 : productData.map(function(item) {
        return {
            id: item.product_id,
            title: item.product_title
        };
    }).filter(function(value, index, self) {
        return self.findIndex(function(p) {
            return p.id === value.id;
        }) === index;
    });
    var typedData = data;
    var handlers = useScheduler().handlers;
    var _reactHookForm_useForm = reactHookForm.useForm({
        resolver: zod$1.zodResolver(eventSchema),
        defaultValues: {
            title: "",
            description: "",
            startDate: /* @__PURE__ */ new Date(),
            endDate: /* @__PURE__ */ new Date(),
            variant: (data === null || data === void 0 ? void 0 : data.variant) || "primary",
            color: (data === null || data === void 0 ? void 0 : data.color) || "blue"
        }
    }), register = _reactHookForm_useForm.register, handleSubmit = _reactHookForm_useForm.handleSubmit, reset = _reactHookForm_useForm.reset, errors = _reactHookForm_useForm.formState.errors, setValue = _reactHookForm_useForm.setValue;
    React9.useEffect(function() {
        if (data) {
            reset({
                title: data.title,
                description: data.description || "",
                startDate: data.startDate,
                endDate: data.endDate,
                variant: data.variant || "primary",
                color: data.color || "blue"
            });
        }
    }, [
        data,
        reset
    ]);
    var colorOptions = [
        {
            key: "blue",
            name: "Marrom"
        },
        {
            key: "red",
            name: "Vermelho"
        },
        {
            key: "green",
            name: "Verde"
        },
        {
            key: "yellow",
            name: "Amarelo"
        }
    ];
    function getEventColor(variant) {
        switch(variant){
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
    function getEventStatus(color) {
        switch(color){
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
    var onSubmit = function(formData) {
        var selectedProductData = productData === null || productData === void 0 ? void 0 : productData.find(function(item) {
            return item.product_id === selectedProduct && (!selectedPath || item.learning_path_title === selectedPath) && item.module_id === selectedModule;
        });
        var newEvent = {
            id: uuid.v4(),
            title: formData.title,
            startDate: formData.startDate,
            endDate: formData.endDate,
            variant: formData.variant,
            description: formData.description,
            productData: selectedProductData ? {
                product_id: selectedProductData.product_id,
                product_title: selectedProductData.product_title,
                learning_path_title: selectedProductData.learning_path_title,
                module_id: selectedProductData.module_id,
                module_title: selectedProductData.module_title
            } : void 0
        };
        if (!(typedData === null || typedData === void 0 ? void 0 : typedData.id)) handlers.handleAddEvent(newEvent);
        else handlers.handleUpdateEvent(newEvent, typedData.id);
        onClose();
    };
    return /* @__PURE__ */ React9__default.default.createElement("form", {
        className: "flex flex-col gap-3 max-h-[80vh] overflow-y-auto pr-2",
        onSubmit: handleSubmit(onSubmit)
    }, CustomAddEventModal ? CustomAddEventModal({
        register: register,
        errors: errors
    }) : /* @__PURE__ */ React9__default.default.createElement(React9__default.default.Fragment, null, /* @__PURE__ */ React9__default.default.createElement(input.Input, _object_spread_props(_object_spread({}, register("title")), {
        label: "Nome do Evento",
        placeholder: "Digite o nome do evento",
        variant: "bordered",
        isInvalid: !!errors.title,
        errorMessage: (_errors_title = errors.title) === null || _errors_title === void 0 ? void 0 : _errors_title.message
    })), /* @__PURE__ */ React9__default.default.createElement(input.Textarea, _object_spread_props(_object_spread({}, register("description")), {
        label: "Descri\xE7\xE3o do Evento",
        placeholder: "Digite a descri\xE7\xE3o do evento",
        variant: "bordered"
    })), /* @__PURE__ */ React9__default.default.createElement(SelectDate, {
        data: data,
        setValue: setValue
    }), productData && productData.length > 0 && /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "flex flex-col gap-3"
    }, /* @__PURE__ */ React9__default.default.createElement(select.Select, {
        label: "Conte\xFAdo",
        placeholder: "Selecione um conte\xFAdo",
        value: selectedProduct,
        onChange: function(e) {
            setSelectedProduct(e.target.value);
            setSelectedPath("");
            setSelectedModule("");
        }
    }, uniqueProducts === null || uniqueProducts === void 0 ? void 0 : uniqueProducts.map(function(product) {
        return /* @__PURE__ */ React9__default.default.createElement(select.SelectItem, {
            key: product.id,
            value: product.id
        }, product.title);
    })), filteredPaths && filteredPaths.length > 0 && /* @__PURE__ */ React9__default.default.createElement(select.Select, {
        label: "Trilha",
        placeholder: "Selecione uma trilha (opcional)",
        value: selectedPath,
        onChange: function(e) {
            setSelectedPath(e.target.value);
            setSelectedModule("");
        }
    }, filteredPaths.map(function(path) {
        return /* @__PURE__ */ React9__default.default.createElement(select.SelectItem, {
            key: path,
            value: path
        }, path);
    })), filteredModules && filteredModules.length > 0 && /* @__PURE__ */ React9__default.default.createElement(select.Select, {
        label: "M\xF3dulo",
        placeholder: "Selecione um m\xF3dulo",
        value: selectedModule,
        onChange: function(e) {
            return setSelectedModule(e.target.value);
        }
    }, filteredModules.map(function(module) {
        return /* @__PURE__ */ React9__default.default.createElement(select.SelectItem, {
            key: module.id,
            value: module.id
        }, module.title);
    }))), /* @__PURE__ */ React9__default.default.createElement(dropdown.Dropdown, {
        backdrop: "blur"
    }, /* @__PURE__ */ React9__default.default.createElement(dropdown.DropdownTrigger, null, /* @__PURE__ */ React9__default.default.createElement(button.Button, {
        variant: "flat",
        className: "justify-between w-fit my-4",
        color: getEventStatus(selectedColor)
    }, (_colorOptions_find = colorOptions.find(function(color) {
        return color.key === selectedColor;
    })) === null || _colorOptions_find === void 0 ? void 0 : _colorOptions_find.name)), /* @__PURE__ */ React9__default.default.createElement(dropdown.DropdownMenu, {
        "aria-label": "Color selection",
        variant: "flat",
        selectionMode: "single",
        selectedKeys: [
            selectedColor
        ],
        onSelectionChange: function(keys) {
            var color = keys.currentKey || "blue";
            setSelectedColor(color);
            reset(function(formData) {
                return _object_spread_props(_object_spread({}, formData), {
                    variant: getEventStatus(color)
                });
            });
        }
    }, colorOptions.map(function(color) {
        return /* @__PURE__ */ React9__default.default.createElement(dropdown.DropdownItem, {
            key: color.key,
            startContent: /* @__PURE__ */ React9__default.default.createElement("div", {
                className: "w-4 h-4 rounded-full bg-".concat(color.key, "-500")
            })
        }, color.name);
    }))), /* @__PURE__ */ React9__default.default.createElement(modal.ModalFooter, {
        className: "px-0"
    }, /* @__PURE__ */ React9__default.default.createElement(button.Button, {
        color: "danger",
        variant: "light",
        onPress: onClose
    }, "Cancelar"), /* @__PURE__ */ React9__default.default.createElement(button.Button, {
        color: "primary",
        type: "submit"
    }, "Salvar Evento"))));
}
var formatDate = function(date) {
    return date.toLocaleString("pt-BR", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true
    });
};
function EventStyled(param) {
    var event = param.event, CustomEventModal = param.CustomEventModal;
    var _useModalContext = useModalContext(), showEventModal = _useModalContext.showModal;
    var handlers = useScheduler().handlers;
    function handleEditEvent(event2) {
        var _CustomEventModal_CustomAddEventModal;
        showEventModal({
            title: event2 === null || event2 === void 0 ? void 0 : event2.title,
            body: /* @__PURE__ */ React9__default.default.createElement(AddEventModal, {
                CustomAddEventModal: CustomEventModal === null || CustomEventModal === void 0 ? void 0 : (_CustomEventModal_CustomAddEventModal = CustomEventModal.CustomAddEventModal) === null || _CustomEventModal_CustomAddEventModal === void 0 ? void 0 : _CustomEventModal_CustomAddEventModal.CustomForm
            }),
            getter: /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    return [
                        2,
                        _object_spread({}, event2)
                    ];
                });
            })
        });
    }
    return /* @__PURE__ */ React9__default.default.createElement(framerMotion.motion.div, {
        initial: {
            opacity: 0,
            scale: 0.9
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: 0.9
        },
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        },
        key: event === null || event === void 0 ? void 0 : event.id,
        className: "w-full relative use-automation-zoom-in cursor-pointer border border-default-400/60 rounded-lg  flex flex-col flex-grow "
    }, /* @__PURE__ */ React9__default.default.createElement(chip.Chip, {
        onClickCapture: function(e) {
            e.stopPropagation();
            handlers.handleDeleteEvent(event === null || event === void 0 ? void 0 : event.id);
        },
        color: "danger",
        variant: "solid",
        classNames: {
            content: "max-w-fit min-w-0 p-1"
        },
        className: "absolute z-50 right-0 top-[-5px]"
    }, /* @__PURE__ */ React9__default.default.createElement(lucideReact.TrashIcon, {
        size: 12
    })), event.CustomEventComponent ? /* @__PURE__ */ React9__default.default.createElement("div", {
        onClickCapture: function(e) {
            e.stopPropagation();
            handleEditEvent({
                id: event === null || event === void 0 ? void 0 : event.id,
                title: event === null || event === void 0 ? void 0 : event.title,
                startDate: event === null || event === void 0 ? void 0 : event.startDate,
                endDate: event === null || event === void 0 ? void 0 : event.endDate,
                description: event === null || event === void 0 ? void 0 : event.description,
                variant: event === null || event === void 0 ? void 0 : event.variant
            });
        }
    }, /* @__PURE__ */ React9__default.default.createElement(event.CustomEventComponent, _object_spread({}, event))) : /* @__PURE__ */ React9__default.default.createElement(chip.Chip, {
        onClickCapture: function(e) {
            e.stopPropagation();
            handleEditEvent({
                id: event === null || event === void 0 ? void 0 : event.id,
                title: event === null || event === void 0 ? void 0 : event.title,
                startDate: event === null || event === void 0 ? void 0 : event.startDate,
                endDate: event === null || event === void 0 ? void 0 : event.endDate,
                description: event === null || event === void 0 ? void 0 : event.description,
                variant: event === null || event === void 0 ? void 0 : event.variant
            });
        },
        variant: "flat",
        color: event === null || event === void 0 ? void 0 : event.variant,
        classNames: {
            content: "p-0"
        },
        className: "min-w-full items-start p-0 flex-grow flex-col flex ".concat((event === null || event === void 0 ? void 0 : event.minmized) ? "h-full" : "min-h-fit p-1", " rounded-md")
    }, /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "flex ".concat((event === null || event === void 0 ? void 0 : event.minmized) ? "p-0" : "p-1", " flex-col flex-grow px-1 rounded-md  items-start w-full")
    }, /* @__PURE__ */ React9__default.default.createElement("h1", {
        className: "".concat((event === null || event === void 0 ? void 0 : event.minmized) && "text-[0.7rem] p-0 px-1", " font-semibold line-clamp-1")
    }, event === null || event === void 0 ? void 0 : event.title), /* @__PURE__ */ React9__default.default.createElement("p", {
        className: "text-[0.65rem]"
    }, event === null || event === void 0 ? void 0 : event.description), !(event === null || event === void 0 ? void 0 : event.minmized) && /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "flex justify-between w-full"
    }, /* @__PURE__ */ React9__default.default.createElement("p", {
        className: "text-sm"
    }, formatDate(event === null || event === void 0 ? void 0 : event.startDate)), /* @__PURE__ */ React9__default.default.createElement("p", {
        className: "text-sm"
    }, "-"), /* @__PURE__ */ React9__default.default.createElement("p", {
        className: "text-sm"
    }, formatDate(event === null || event === void 0 ? void 0 : event.endDate))))));
}
// components/schedule/_components/view/day/daily-view.tsx
var hours = Array.from({
    length: 24
}, function(_, i) {
    return "".concat(i.toString().padStart(2, "0"), ":00");
});
var containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
};
var itemVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3
        }
    }
};
function DailyView(param) {
    var prevButton = param.prevButton, nextButton = param.nextButton, CustomEventComponent = param.CustomEventComponent, CustomEventModal = param.CustomEventModal, classNames = param.classNames;
    var hoursColumnRef = React9.useRef(null);
    var _React9_useState = _sliced_to_array(React9.useState(null), 2), detailedHour = _React9_useState[0], setDetailedHour = _React9_useState[1];
    var _React9_useState1 = _sliced_to_array(React9.useState(0), 2), timelinePosition = _React9_useState1[0], setTimelinePosition = _React9_useState1[1];
    var _React9_useState2 = _sliced_to_array(React9.useState(/* @__PURE__ */ new Date()), 2), currentDate = _React9_useState2[0], setCurrentDate = _React9_useState2[1];
    var showModal = useModalContext().showModal;
    var _useScheduler = useScheduler(), getters = _useScheduler.getters, handlers = _useScheduler.handlers;
    var handleMouseMove = function(e) {
        if (!hoursColumnRef.current) return;
        var rect = hoursColumnRef.current.getBoundingClientRect();
        var y = e.clientY - rect.top;
        var hourHeight = rect.height / 24;
        var hour = Math.max(0, Math.min(23, Math.floor(y / hourHeight)));
        var minuteFraction = y % hourHeight / hourHeight;
        var minutes = Math.floor(minuteFraction * 60);
        setDetailedHour("".concat(hour.toString().padStart(2, "0"), ":").concat(minutes.toString().padStart(2, "0")));
        setTimelinePosition(y);
    };
    var getFormattedDayTitle = function() {
        return currentDate.toLocaleDateString("pt-BR", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric"
        });
    };
    var dayEvents = getters.getEventsForDay((currentDate === null || currentDate === void 0 ? void 0 : currentDate.getDate()) || 0, currentDate);
    function handleAddEvent(event) {
        var _CustomEventModal_CustomAddEventModal, _CustomEventModal_CustomAddEventModal1;
        showModal({
            title: (CustomEventModal === null || CustomEventModal === void 0 ? void 0 : (_CustomEventModal_CustomAddEventModal = CustomEventModal.CustomAddEventModal) === null || _CustomEventModal_CustomAddEventModal === void 0 ? void 0 : _CustomEventModal_CustomAddEventModal.title) || "Adicionar Evento",
            body: /* @__PURE__ */ React9__default.default.createElement(AddEventModal, {
                CustomAddEventModal: CustomEventModal === null || CustomEventModal === void 0 ? void 0 : (_CustomEventModal_CustomAddEventModal1 = CustomEventModal.CustomAddEventModal) === null || _CustomEventModal_CustomAddEventModal1 === void 0 ? void 0 : _CustomEventModal_CustomAddEventModal1.CustomForm
            }),
            getter: /*#__PURE__*/ _async_to_generator(function() {
                var startDate, endDate;
                return _ts_generator(this, function(_state) {
                    startDate = (event === null || event === void 0 ? void 0 : event.startDate) || /* @__PURE__ */ new Date();
                    endDate = (event === null || event === void 0 ? void 0 : event.endDate) || /* @__PURE__ */ new Date();
                    return [
                        2,
                        {
                            startDate: startDate,
                            endDate: endDate
                        }
                    ];
                });
            })
        });
    }
    function handleAddEventDay(detailedHour2) {
        if (!detailedHour2) {
            console.error("Detailed hour not provided.");
            return;
        }
        var _detailedHour2_split_map = _sliced_to_array(detailedHour2.split(":").map(Number), 2), hours3 = _detailedHour2_split_map[0], minutes = _detailedHour2_split_map[1];
        var chosenDay = currentDate.getDate();
        if (chosenDay < 1 || chosenDay > 31) {
            console.error("Invalid day selected:", chosenDay);
            return;
        }
        var date = new Date(currentDate.getFullYear(), currentDate.getMonth(), chosenDay, hours3, minutes);
        handleAddEvent({
            startDate: date,
            endDate: new Date(date.getTime() + 60 * 60 * 1e3),
            // 1-hour duration
            title: "",
            id: "",
            variant: "primary"
        });
    }
    var handleNextDay = function() {
        var nextDay = new Date(currentDate);
        nextDay.setDate(currentDate.getDate() + 1);
        setCurrentDate(nextDay);
    };
    var handlePrevDay = function() {
        var prevDay = new Date(currentDate);
        prevDay.setDate(currentDate.getDate() - 1);
        setCurrentDate(prevDay);
    };
    return /* @__PURE__ */ React9__default.default.createElement("div", {
        className: ""
    }, /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "flex justify-between gap-3 flex-wrap mb-5"
    }, /* @__PURE__ */ React9__default.default.createElement("h1", {
        className: "text-3xl font-semibold mb-4"
    }, getFormattedDayTitle()), /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "flex ml-auto  gap-3"
    }, prevButton ? /* @__PURE__ */ React9__default.default.createElement("div", {
        onClick: handlePrevDay
    }, prevButton) : /* @__PURE__ */ React9__default.default.createElement(button.Button, {
        className: classNames === null || classNames === void 0 ? void 0 : classNames.prev,
        startContent: /* @__PURE__ */ React9__default.default.createElement(lucideReact.ArrowLeft, null),
        onClick: handlePrevDay
    }, "Anterior"), nextButton ? /* @__PURE__ */ React9__default.default.createElement("div", {
        onClick: handleNextDay
    }, nextButton) : /* @__PURE__ */ React9__default.default.createElement(button.Button, {
        className: classNames === null || classNames === void 0 ? void 0 : classNames.next,
        onClick: handleNextDay,
        endContent: /* @__PURE__ */ React9__default.default.createElement(lucideReact.ArrowRight, null)
    }, "Pr\xF3ximo"))), /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "flex flex-col gap-4"
    }, /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "all-day-events"
    }, /* @__PURE__ */ React9__default.default.createElement(framerMotion.AnimatePresence, {
        mode: "wait"
    }, dayEvents && (dayEvents === null || dayEvents === void 0 ? void 0 : dayEvents.length) ? dayEvents === null || dayEvents === void 0 ? void 0 : dayEvents.map(function(event, eventIndex) {
        return /* @__PURE__ */ React9__default.default.createElement("div", {
            key: "event-".concat(event.id, "-").concat(eventIndex)
        }, /* @__PURE__ */ React9__default.default.createElement(EventStyled, {
            event: _object_spread_props(_object_spread({}, event), {
                CustomEventComponent: CustomEventComponent,
                minmized: false
            }),
            CustomEventModal: CustomEventModal
        }));
    }) : "Nenhum evento para hoje")), /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "relative rounded-md bg-default-50 hover:bg-default-100 transition duration-400"
    }, /* @__PURE__ */ React9__default.default.createElement(framerMotion.motion.div, {
        className: "relative rounded-xl flex ease-in-out",
        ref: hoursColumnRef,
        variants: containerVariants,
        initial: "hidden",
        animate: "visible",
        onMouseMove: handleMouseMove,
        onMouseLeave: function() {
            return setDetailedHour(null);
        }
    }, /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "flex  flex-col"
    }, hours.map(function(hour, index) {
        return /* @__PURE__ */ React9__default.default.createElement(framerMotion.motion.div, {
            key: "hour-".concat(index),
            variants: itemVariants,
            className: "cursor-pointer   transition duration-300  p-4 h-[64px] text-left text-sm text-muted-foreground border-default-200"
        }, hour);
    })), /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "flex relative flex-grow flex-col "
    }, Array.from({
        length: 24
    }).map(function(_, index) {
        return /* @__PURE__ */ React9__default.default.createElement("div", {
            onClick: function() {
                handleAddEventDay(detailedHour);
            },
            key: "hour-".concat(index),
            className: "cursor-pointer w-full relative border-b  hover:bg-default-200/50  transition duration-300  p-4 h-[64px] text-left text-sm text-muted-foreground border-default-200"
        }, /* @__PURE__ */ React9__default.default.createElement("div", {
            className: "absolute bg-default-200 flex items-center justify-center text-xs opacity-0 transition left-0 top-0 duration-250 hover:opacity-100 w-full h-full"
        }, "Adicionar Evento"));
    }), /* @__PURE__ */ React9__default.default.createElement(framerMotion.AnimatePresence, {
        mode: "wait"
    }, dayEvents && (dayEvents === null || dayEvents === void 0 ? void 0 : dayEvents.length) ? dayEvents === null || dayEvents === void 0 ? void 0 : dayEvents.map(function(event, eventIndex) {
        var _handlers_handleEventStyling = handlers.handleEventStyling(event, dayEvents), height = _handlers_handleEventStyling.height, left = _handlers_handleEventStyling.left, maxWidth = _handlers_handleEventStyling.maxWidth, minWidth = _handlers_handleEventStyling.minWidth, top = _handlers_handleEventStyling.top, zIndex = _handlers_handleEventStyling.zIndex;
        return /* @__PURE__ */ React9__default.default.createElement("div", {
            key: "event-".concat(event.id, "-").concat(eventIndex),
            style: {
                minHeight: height,
                top: top,
                left: left,
                maxWidth: maxWidth,
                minWidth: minWidth
            },
            className: "flex transition-all duration-1000 flex-grow flex-col z-50 absolute"
        }, /* @__PURE__ */ React9__default.default.createElement(EventStyled, {
            event: _object_spread_props(_object_spread({}, event), {
                CustomEventComponent: CustomEventComponent,
                minmized: true
            }),
            CustomEventModal: CustomEventModal
        }));
    }) : ""))), detailedHour && /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "absolute left-[50px] w-[calc(100%-53px)] h-[3px]  bg-primary-300 dark:bg-primary/30 rounded-full pointer-events-none",
        style: {
            top: "".concat(timelinePosition, "px")
        }
    }, /* @__PURE__ */ React9__default.default.createElement(chip.Chip, {
        color: "success",
        variant: "flat",
        className: "absolute vertical-abs-center z-50 left-[-55px] text-xs uppercase"
    }, detailedHour)))));
}
function ShowMoreEventsModal() {
    var data = useModalContext().data;
    var dayEvents = (data === null || data === void 0 ? void 0 : data.dayEvents) || [];
    return /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "flex flex-col gap-2"
    }, dayEvents.map(function(event) {
        return /* @__PURE__ */ React9__default.default.createElement(EventStyled, {
            key: event.id,
            event: _object_spread({}, event)
        });
    }));
}
// components/schedule/_components/view/month/month-view.tsx
function MonthView(param) {
    var prevButton = param.prevButton, nextButton = param.nextButton, CustomEventComponent = param.CustomEventComponent, CustomEventModal = param.CustomEventModal, classNames = param.classNames;
    var _useScheduler = useScheduler(), getters = _useScheduler.getters, weekStartsOn = _useScheduler.weekStartsOn;
    var showModal = useModalContext().showModal;
    var _React9_useState = _sliced_to_array(React9.useState(/* @__PURE__ */ new Date()), 2), currentDate = _React9_useState[0], setCurrentDate = _React9_useState[1];
    var daysInMonth = getters.getDaysInMonth(currentDate.getMonth(), currentDate.getFullYear());
    var handlePrevMonth = function() {
        var newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        setCurrentDate(newDate);
    };
    var handleNextMonth = function() {
        var newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
        setCurrentDate(newDate);
    };
    function handleAddEvent(selectedDay) {
        showModal({
            title: "Adicionar Evento",
            body: /* @__PURE__ */ React9__default.default.createElement(AddEventModal, null),
            getter: /*#__PURE__*/ _async_to_generator(function() {
                var startDate, endDate;
                return _ts_generator(this, function(_state) {
                    startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDay !== null && selectedDay !== void 0 ? selectedDay : 1, 0, 0, 0, 0);
                    endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDay !== null && selectedDay !== void 0 ? selectedDay : 1, 23, 59, 59, 999);
                    return [
                        2,
                        {
                            startDate: startDate,
                            endDate: endDate
                        }
                    ];
                });
            })
        });
    }
    function handleShowMoreEvents(dayEvents) {
        var _dayEvents_;
        showModal({
            title: dayEvents === null || dayEvents === void 0 ? void 0 : (_dayEvents_ = dayEvents[0]) === null || _dayEvents_ === void 0 ? void 0 : _dayEvents_.startDate.toLocaleDateString("pt-BR", {
                weekday: "short",
                day: "numeric",
                month: "short",
                year: "numeric"
            }),
            body: /* @__PURE__ */ React9__default.default.createElement(ShowMoreEventsModal, null),
            getter: /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    return [
                        2,
                        {
                            dayEvents: dayEvents
                        }
                    ];
                });
            })
        });
    }
    var containerVariants3 = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.02
            }
        }
    };
    var itemVariants2 = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3
            }
        }
    };
    var daysOfWeek = weekStartsOn === "monday" ? [
        "Seg",
        "Ter",
        "Qua",
        "Qui",
        "Sex",
        "S\xE1b",
        "Dom"
    ] : [
        "Dom",
        "Seg",
        "Ter",
        "Qua",
        "Qui",
        "Sex",
        "S\xE1b"
    ];
    var firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    var startOffset = (firstDayOfMonth.getDay() - (weekStartsOn === "monday" ? 1 : 0) + 7) % 7;
    var prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    var lastDateOfPrevMonth = new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 0).getDate();
    return /* @__PURE__ */ React9__default.default.createElement("div", null, /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "flex flex-col mb-4"
    }, /* @__PURE__ */ React9__default.default.createElement(framerMotion.motion.h2, {
        key: currentDate.getMonth(),
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        transition: {
            duration: 1
        },
        className: "text-lg my-5 tracking-tighter font-bold"
    }, currentDate.toLocaleString("default", {
        month: "long"
    }), " ", currentDate.getFullYear()), /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "flex gap-3"
    }, prevButton ? /* @__PURE__ */ React9__default.default.createElement("div", {
        onClick: handlePrevMonth
    }, prevButton) : /* @__PURE__ */ React9__default.default.createElement(button.Button, {
        className: classNames === null || classNames === void 0 ? void 0 : classNames.prev,
        startContent: /* @__PURE__ */ React9__default.default.createElement(lucideReact.ArrowLeft, null),
        onClick: handlePrevMonth
    }, "Anterior"), nextButton ? /* @__PURE__ */ React9__default.default.createElement("div", {
        onClick: handleNextMonth
    }, nextButton) : /* @__PURE__ */ React9__default.default.createElement(button.Button, {
        className: classNames === null || classNames === void 0 ? void 0 : classNames.next,
        onClick: handleNextMonth,
        endContent: /* @__PURE__ */ React9__default.default.createElement(lucideReact.ArrowRight, null)
    }, "Pr\xF3ximo"))), /* @__PURE__ */ React9__default.default.createElement(framerMotion.AnimatePresence, {
        mode: "wait"
    }, /* @__PURE__ */ React9__default.default.createElement(framerMotion.motion.div, {
        variants: containerVariants3,
        initial: "hidden",
        animate: "visible",
        key: currentDate.getMonth(),
        className: "grid grid-cols-7 gap-1 sm:gap-2"
    }, daysOfWeek.map(function(day, idx) {
        return /* @__PURE__ */ React9__default.default.createElement("div", {
            key: idx,
            className: "text-left my-8 text-2xl tracking-tighter font-medium"
        }, day);
    }), Array.from({
        length: startOffset
    }).map(function(_, idx) {
        return /* @__PURE__ */ React9__default.default.createElement("div", {
            key: "offset-".concat(idx),
            className: "h-[150px] opacity-50"
        }, /* @__PURE__ */ React9__default.default.createElement("div", {
            className: clsx__default.default("font-semibold relative text-lg mb-1")
        }, lastDateOfPrevMonth - startOffset + idx + 1));
    }), daysInMonth.map(function(dayObj) {
        var dayEvents = getters.getEventsForDay(dayObj.day, currentDate);
        return /* @__PURE__ */ React9__default.default.createElement(framerMotion.motion.div, {
            className: "hover:z-50 border-none h-[150px] rounded group flex flex-col",
            key: dayObj.day,
            variants: itemVariants2
        }, /* @__PURE__ */ React9__default.default.createElement(card.Card, {
            isPressable: true,
            className: "shadow-md  relative flex p-4 border border-default-100 h-full",
            onClick: function() {
                return handleAddEvent(dayObj.day);
            }
        }, /* @__PURE__ */ React9__default.default.createElement("div", {
            className: clsx__default.default("font-semibold relative text-lg mb-1", dayEvents.length > 0 ? "text-primary-600" : "text-muted-foreground", /* @__PURE__ */ new Date().getDate() === dayObj.day && /* @__PURE__ */ new Date().getMonth() === currentDate.getMonth() && /* @__PURE__ */ new Date().getFullYear() === currentDate.getFullYear() ? "text-secondary-500" : "")
        }, dayObj.day), /* @__PURE__ */ React9__default.default.createElement("div", {
            className: "flex-grow flex flex-col gap-2 w-full overflow-hidden"
        }, /* @__PURE__ */ React9__default.default.createElement(framerMotion.AnimatePresence, {
            mode: "wait"
        }, (dayEvents === null || dayEvents === void 0 ? void 0 : dayEvents.length) > 0 && /* @__PURE__ */ React9__default.default.createElement(EventStyled, {
            event: _object_spread_props(_object_spread({}, dayEvents[0]), {
                CustomEventComponent: CustomEventComponent,
                minmized: true
            }),
            CustomEventModal: CustomEventModal
        })), dayEvents.length > 1 && /* @__PURE__ */ React9__default.default.createElement(chip.Chip, {
            onClick: function(e) {
                e.stopPropagation();
                handleShowMoreEvents(dayEvents);
            },
            variant: "flat",
            className: "hover:bg-default-200 absolute right-2 text-xs top-2 transition duration-300"
        }, dayEvents.length > 1 ? "+".concat(dayEvents.length - 1) : " ")), dayEvents.length === 0 && /* @__PURE__ */ React9__default.default.createElement("div", {
            className: "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }, /* @__PURE__ */ React9__default.default.createElement("span", {
            className: "text-white tracking-tighter text-lg font-semibold"
        }, "Adicionar Evento"))));
    }))));
}
var hours2 = Array.from({
    length: 24
}, function(_, i) {
    return "".concat(i.toString().padStart(2, "0"), ":00");
});
var containerVariants2 = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};
function WeeklyView(param) {
    var prevButton = param.prevButton, nextButton = param.nextButton, CustomEventComponent = param.CustomEventComponent, CustomEventModal = param.CustomEventModal, classNames = param.classNames;
    var _useScheduler = useScheduler(), getters = _useScheduler.getters, handlers = _useScheduler.handlers;
    var hoursColumnRef = React9.useRef(null);
    var _React9_useState = _sliced_to_array(React9.useState(null), 2), detailedHour = _React9_useState[0], setDetailedHour = _React9_useState[1];
    var _React9_useState1 = _sliced_to_array(React9.useState(0), 2), timelinePosition = _React9_useState1[0], setTimelinePosition = _React9_useState1[1];
    var _React9_useState2 = _sliced_to_array(React9.useState(/* @__PURE__ */ new Date()), 2), currentDate = _React9_useState2[0], setCurrentDate = _React9_useState2[1];
    var showModal = useModalContext().showModal;
    var daysOfWeek = getters === null || getters === void 0 ? void 0 : getters.getDaysInWeek(getters === null || getters === void 0 ? void 0 : getters.getWeekNumber(currentDate), currentDate.getFullYear());
    var handleMouseMove = function(e) {
        if (!hoursColumnRef.current) return;
        var rect = hoursColumnRef.current.getBoundingClientRect();
        var y = e.clientY - rect.top;
        var hourHeight = rect.height / 24;
        var hour = Math.max(0, Math.min(23, Math.floor(y / hourHeight)));
        var minuteFraction = y % hourHeight / hourHeight;
        var minutes = Math.floor(minuteFraction * 60);
        setDetailedHour("".concat(hour.toString().padStart(2, "0"), ":").concat(minutes.toString().padStart(2, "0")));
        setTimelinePosition(y + 83);
    };
    function handleAddEvent(event) {
        showModal({
            title: "Adicionar Evento",
            body: /* @__PURE__ */ React9__default.default.createElement(AddEventModal, null),
            getter: /*#__PURE__*/ _async_to_generator(function() {
                var startDate, endDate;
                return _ts_generator(this, function(_state) {
                    startDate = (event === null || event === void 0 ? void 0 : event.startDate) || /* @__PURE__ */ new Date();
                    endDate = (event === null || event === void 0 ? void 0 : event.endDate) || /* @__PURE__ */ new Date();
                    return [
                        2,
                        {
                            startDate: startDate,
                            endDate: endDate
                        }
                    ];
                });
            })
        });
    }
    var handleNextWeek = function() {
        var nextWeek = new Date(currentDate);
        nextWeek.setDate(currentDate.getDate() + 7);
        setCurrentDate(nextWeek);
    };
    var handlePrevWeek = function() {
        var prevWeek = new Date(currentDate);
        prevWeek.setDate(currentDate.getDate() - 7);
        setCurrentDate(prevWeek);
    };
    function handleAddEventWeek(dayIndex, detailedHour2) {
        if (!detailedHour2) {
            console.error("Detailed hour not provided.");
            return;
        }
        var _detailedHour2_split_map = _sliced_to_array(detailedHour2.split(":").map(Number), 2), hours3 = _detailedHour2_split_map[0], minutes = _detailedHour2_split_map[1];
        var chosenDay = daysOfWeek[dayIndex % 7].getDate();
        if (chosenDay < 1 || chosenDay > 31) {
            console.error("Invalid day selected:", chosenDay);
            return;
        }
        var date = new Date(currentDate.getFullYear(), currentDate.getMonth(), chosenDay, hours3, minutes);
        handleAddEvent({
            startDate: date,
            endDate: new Date(date.getTime() + 60 * 60 * 1e3),
            // 1-hour duration
            title: "",
            id: "",
            variant: "primary"
        });
    }
    return /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "flex flex-col gap-4"
    }, /* @__PURE__ */ React9__default.default.createElement(framerMotion.motion.div, {
        key: currentDate.toDateString() + "parent",
        className: "all-week-events flex flex-col gap-2",
        variants: containerVariants2,
        initial: "hidden",
        animate: "visible"
    }), /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "flex ml-auto gap-3"
    }, prevButton ? /* @__PURE__ */ React9__default.default.createElement("div", {
        onClick: handlePrevWeek
    }, prevButton) : /* @__PURE__ */ React9__default.default.createElement(button.Button, {
        className: classNames === null || classNames === void 0 ? void 0 : classNames.prev,
        startContent: /* @__PURE__ */ React9__default.default.createElement(lucideReact.ArrowLeft, null),
        onClick: handlePrevWeek
    }, "Anterior"), nextButton ? /* @__PURE__ */ React9__default.default.createElement("div", {
        onClick: handleNextWeek
    }, nextButton) : /* @__PURE__ */ React9__default.default.createElement(button.Button, {
        className: classNames === null || classNames === void 0 ? void 0 : classNames.next,
        onClick: handleNextWeek,
        endContent: /* @__PURE__ */ React9__default.default.createElement(lucideReact.ArrowRight, null)
    }, "Pr\xF3ximo")), /* @__PURE__ */ React9__default.default.createElement("div", {
        key: currentDate.toDateString(),
        className: "grid use-automation-zoom-in grid-cols-8 gap-0"
    }, /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "sticky top-0 left-0 z-30 bg-default-100 rounded-tl-lg h-full border-0  flex items-center justify-center"
    }, /* @__PURE__ */ React9__default.default.createElement("span", {
        className: "text-lg font-semibold text-muted-foreground px-4"
    }, "Semana ", getters.getWeekNumber(currentDate))), /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "col-span-7 flex flex-col relative"
    }, /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "grid grid-cols-7 gap-0 flex-grow"
    }, daysOfWeek.map(function(day, idx) {
        return /* @__PURE__ */ React9__default.default.createElement("div", {
            key: idx,
            className: "relative flex flex-col"
        }, /* @__PURE__ */ React9__default.default.createElement("div", {
            className: "sticky bg-default-100 top-0 z-20 flex-grow flex items-center justify-center"
        }, /* @__PURE__ */ React9__default.default.createElement("div", {
            className: "text-center p-4"
        }, /* @__PURE__ */ React9__default.default.createElement("div", {
            className: "text-lg font-semibold"
        }, getters.getDayName(day.getDay())), /* @__PURE__ */ React9__default.default.createElement("div", {
            className: clsx__default.default("text-lg font-semibold", /* @__PURE__ */ new Date().getDate() === day.getDate() && /* @__PURE__ */ new Date().getMonth() === currentDate.getMonth() && /* @__PURE__ */ new Date().getFullYear() === currentDate.getFullYear() ? "text-secondary-500" : "")
        }, day.getDate()))), /* @__PURE__ */ React9__default.default.createElement("div", {
            className: "absolute top-12 right-0 w-px h-[calc(100%-3rem)]"
        }));
    })), detailedHour && /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "absolute flex z-10 left-0 w-full h-[3px] bg-primary-300 dark:bg-primary/30 rounded-full pointer-events-none",
        style: {
            top: "".concat(timelinePosition, "px")
        }
    }, /* @__PURE__ */ React9__default.default.createElement(chip.Chip, {
        color: "success",
        variant: "flat",
        className: "absolute vertical-abs-center z-50 left-[-55px] text-xs uppercase"
    }, detailedHour))), /* @__PURE__ */ React9__default.default.createElement("div", {
        ref: hoursColumnRef,
        onMouseMove: handleMouseMove,
        onMouseLeave: function() {
            return setDetailedHour(null);
        },
        className: "relative grid grid-cols-8 col-span-8"
    }, /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "col-span-1 bg-default-50 hover:bg-default-100 transition duration-400"
    }, hours2.map(function(hour, index) {
        return /* @__PURE__ */ React9__default.default.createElement("div", {
            key: "hour-".concat(index),
            className: "cursor-pointer border-b border-default-200 p-[16px] h-[64px] text-center text-sm text-muted-foreground border-r"
        }, hour);
    })), /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "col-span-7 bg-default-50 grid h-full grid-cols-7"
    }, Array.from({
        length: 7
    }, function(_, dayIndex) {
        var dayEvents = getters.getEventsForDay(daysOfWeek[dayIndex % 7].getDate(), currentDate);
        return /* @__PURE__ */ React9__default.default.createElement("div", {
            key: "day-".concat(dayIndex),
            className: "col-span-1  border-default-200 z-20 relative transition duration-300 cursor-pointer border-r border-b text-center text-sm text-muted-foreground",
            onClick: function() {
                handleAddEventWeek(dayIndex, detailedHour);
            }
        }, /* @__PURE__ */ React9__default.default.createElement(framerMotion.AnimatePresence, {
            mode: "wait"
        }, dayEvents === null || dayEvents === void 0 ? void 0 : dayEvents.map(function(event, eventIndex) {
            var _handlers_handleEventStyling = handlers.handleEventStyling(event, dayEvents), height = _handlers_handleEventStyling.height, left = _handlers_handleEventStyling.left, maxWidth = _handlers_handleEventStyling.maxWidth, minWidth = _handlers_handleEventStyling.minWidth, top = _handlers_handleEventStyling.top, zIndex = _handlers_handleEventStyling.zIndex;
            return /* @__PURE__ */ React9__default.default.createElement("div", {
                key: "event-".concat(event.id, "-").concat(eventIndex),
                style: {
                    minHeight: height,
                    height: height,
                    top: top,
                    left: left,
                    maxWidth: maxWidth,
                    minWidth: minWidth
                },
                className: "flex transitio transition-all duration-1000 flex-grow flex-col z-50 absolute"
            }, /* @__PURE__ */ React9__default.default.createElement(EventStyled, {
                event: _object_spread_props(_object_spread({}, event), {
                    CustomEventComponent: CustomEventComponent,
                    minmized: true
                }),
                CustomEventModal: CustomEventModal
            }));
        })), Array.from({
            length: 24
        }, function(_2, hourIndex) {
            return /* @__PURE__ */ React9__default.default.createElement("div", {
                key: "day-".concat(dayIndex, "-hour-").concat(hourIndex),
                className: "col-span-1 border-default-200 h-16 z-20 relative transition duration-300 cursor-pointer border-r border-b text-center text-sm text-muted-foreground"
            }, /* @__PURE__ */ React9__default.default.createElement("div", {
                className: "absolute bg-default-100 flex items-center justify-center text-xs opacity-0 transition duration-250 hover:opacity-100 w-full h-full"
            }, "Adicionar Evento"));
        }));
    })))));
}
// components/schedule/_components/view/schedular-view-filteration.tsx
var animationConfig = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0,
        y: -20
    },
    transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 250
    }
};
function SchedulerViewFilteration(param) {
    var _param_views = param.views, views = _param_views === void 0 ? {
        views: [
            "day",
            "week",
            "month"
        ],
        mobileViews: [
            "day"
        ]
    } : _param_views, CustomComponents = param.CustomComponents, classNames = param.classNames;
    var _CustomComponents_customTabs, _CustomComponents_customButtons, _CustomComponents_customButtons1, _CustomComponents_customTabs1, _CustomComponents_customButtons2, _CustomComponents_customButtons3, _CustomComponents_customTabs2, _CustomComponents_customButtons4, _CustomComponents_customButtons5, // Add custom button
    _CustomComponents_customButtons6, _classNames_buttons;
    var _useModalContext = useModalContext(), showAddEventModal = _useModalContext.showModal;
    var _React9__default_default_useState = _sliced_to_array(React9__default.default.useState(false), 2), clientSide = _React9__default_default_useState[0], setClientSide = _React9__default_default_useState[1];
    React9.useEffect(function() {
        setClientSide(true);
    }, []);
    var _React9__default_default_useState1 = _sliced_to_array(React9__default.default.useState(clientSide ? window.innerWidth <= 768 : false), 2), isMobile = _React9__default_default_useState1[0], setIsMobile = _React9__default_default_useState1[1];
    React9.useEffect(function() {
        var handleResize = function handleResize() {
            if (window && window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };
        if (!clientSide) return;
        setIsMobile(window.innerWidth <= 768);
        window && window.addEventListener("resize", handleResize);
        return function() {
            return window && window.removeEventListener("resize", handleResize);
        };
    }, [
        clientSide
    ]);
    function handleAddEvent(selectedDay) {
        var _CustomComponents_CustomEventModal_CustomAddEventModal, _CustomComponents_CustomEventModal, _CustomComponents_CustomEventModal_CustomAddEventModal1, _CustomComponents_CustomEventModal1, _CustomComponents_CustomEventModal_CustomAddEventModal2, _CustomComponents_CustomEventModal2;
        showAddEventModal({
            title: (CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_CustomEventModal = CustomComponents.CustomEventModal) === null || _CustomComponents_CustomEventModal === void 0 ? void 0 : (_CustomComponents_CustomEventModal_CustomAddEventModal = _CustomComponents_CustomEventModal.CustomAddEventModal) === null || _CustomComponents_CustomEventModal_CustomAddEventModal === void 0 ? void 0 : _CustomComponents_CustomEventModal_CustomAddEventModal.title) || "Adicionar Evento",
            body: /* @__PURE__ */ React9__default.default.createElement(AddEventModal, {
                CustomAddEventModal: CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_CustomEventModal1 = CustomComponents.CustomEventModal) === null || _CustomComponents_CustomEventModal1 === void 0 ? void 0 : (_CustomComponents_CustomEventModal_CustomAddEventModal1 = _CustomComponents_CustomEventModal1.CustomAddEventModal) === null || _CustomComponents_CustomEventModal_CustomAddEventModal1 === void 0 ? void 0 : _CustomComponents_CustomEventModal_CustomAddEventModal1.CustomForm,
                productData: CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_CustomEventModal2 = CustomComponents.CustomEventModal) === null || _CustomComponents_CustomEventModal2 === void 0 ? void 0 : (_CustomComponents_CustomEventModal_CustomAddEventModal2 = _CustomComponents_CustomEventModal2.CustomAddEventModal) === null || _CustomComponents_CustomEventModal_CustomAddEventModal2 === void 0 ? void 0 : _CustomComponents_CustomEventModal_CustomAddEventModal2.ProductData
            }),
            getter: /*#__PURE__*/ _async_to_generator(function() {
                var startDate, endDate;
                return _ts_generator(this, function(_state) {
                    startDate = new Date(/* @__PURE__ */ new Date().getFullYear(), /* @__PURE__ */ new Date().getMonth(), // current day
                    /* @__PURE__ */ new Date().getDate(), 0, 0, 0, 0);
                    endDate = new Date(/* @__PURE__ */ new Date().getFullYear(), /* @__PURE__ */ new Date().getMonth(), // current day
                    /* @__PURE__ */ new Date().getDate(), 23, 59, 59, 999);
                    return [
                        2,
                        {
                            startDate: startDate,
                            endDate: endDate
                        }
                    ];
                });
            })
        });
    }
    var viewsSelector = isMobile ? views === null || views === void 0 ? void 0 : views.mobileViews : views === null || views === void 0 ? void 0 : views.views;
    return /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "flex w-full flex-col"
    }, /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "flex w-full"
    }, /* @__PURE__ */ React9__default.default.createElement("div", {
        className: "dayly-weekly-monthly-selection relative w-full"
    }, /* @__PURE__ */ React9__default.default.createElement(tabs.Tabs, {
        classNames: _object_spread({}, classNames === null || classNames === void 0 ? void 0 : classNames.tabs),
        "aria-label": "Options",
        color: "primary",
        variant: "solid"
    }, (viewsSelector === null || viewsSelector === void 0 ? void 0 : viewsSelector.includes("day")) && /* @__PURE__ */ React9__default.default.createElement(tabs.Tab, {
        key: "day",
        title: (CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customTabs = CustomComponents.customTabs) === null || _CustomComponents_customTabs === void 0 ? void 0 : _CustomComponents_customTabs.CustomDayTab) ? CustomComponents.customTabs.CustomDayTab : /* @__PURE__ */ React9__default.default.createElement("div", {
            className: "flex items-center space-x-2"
        }, /* @__PURE__ */ React9__default.default.createElement(lucideReact.CalendarDaysIcon, {
            size: 15
        }), /* @__PURE__ */ React9__default.default.createElement("span", null, "Dia"))
    }, /* @__PURE__ */ React9__default.default.createElement(framerMotion.motion.div, _object_spread({}, animationConfig), /* @__PURE__ */ React9__default.default.createElement(DailyView, {
        classNames: classNames === null || classNames === void 0 ? void 0 : classNames.buttons,
        prevButton: CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customButtons = CustomComponents.customButtons) === null || _CustomComponents_customButtons === void 0 ? void 0 : _CustomComponents_customButtons.CustomPrevButton,
        nextButton: CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customButtons1 = CustomComponents.customButtons) === null || _CustomComponents_customButtons1 === void 0 ? void 0 : _CustomComponents_customButtons1.CustomNextButton,
        CustomEventComponent: CustomComponents === null || CustomComponents === void 0 ? void 0 : CustomComponents.CustomEventComponent,
        CustomEventModal: CustomComponents === null || CustomComponents === void 0 ? void 0 : CustomComponents.CustomEventModal
    }))), (viewsSelector === null || viewsSelector === void 0 ? void 0 : viewsSelector.includes("week")) && /* @__PURE__ */ React9__default.default.createElement(tabs.Tab, {
        key: "week",
        title: (CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customTabs1 = CustomComponents.customTabs) === null || _CustomComponents_customTabs1 === void 0 ? void 0 : _CustomComponents_customTabs1.CustomWeekTab) ? CustomComponents.customTabs.CustomWeekTab : /* @__PURE__ */ React9__default.default.createElement("div", {
            className: "flex items-center space-x-2"
        }, /* @__PURE__ */ React9__default.default.createElement(bs.BsCalendarWeek, null), /* @__PURE__ */ React9__default.default.createElement("span", null, "Semana"))
    }, /* @__PURE__ */ React9__default.default.createElement(framerMotion.motion.div, _object_spread({}, animationConfig), /* @__PURE__ */ React9__default.default.createElement(WeeklyView, {
        classNames: classNames === null || classNames === void 0 ? void 0 : classNames.buttons,
        prevButton: CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customButtons2 = CustomComponents.customButtons) === null || _CustomComponents_customButtons2 === void 0 ? void 0 : _CustomComponents_customButtons2.CustomPrevButton,
        nextButton: CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customButtons3 = CustomComponents.customButtons) === null || _CustomComponents_customButtons3 === void 0 ? void 0 : _CustomComponents_customButtons3.CustomNextButton,
        CustomEventComponent: CustomComponents === null || CustomComponents === void 0 ? void 0 : CustomComponents.CustomEventComponent,
        CustomEventModal: CustomComponents === null || CustomComponents === void 0 ? void 0 : CustomComponents.CustomEventModal
    }))), (viewsSelector === null || viewsSelector === void 0 ? void 0 : viewsSelector.includes("month")) && /* @__PURE__ */ React9__default.default.createElement(tabs.Tab, {
        key: "month",
        title: (CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customTabs2 = CustomComponents.customTabs) === null || _CustomComponents_customTabs2 === void 0 ? void 0 : _CustomComponents_customTabs2.CustomMonthTab) ? CustomComponents.customTabs.CustomMonthTab : /* @__PURE__ */ React9__default.default.createElement("div", {
            className: "flex items-center space-x-2"
        }, /* @__PURE__ */ React9__default.default.createElement(bs.BsCalendarMonth, null), /* @__PURE__ */ React9__default.default.createElement("span", null, "M\xEAs"))
    }, /* @__PURE__ */ React9__default.default.createElement(framerMotion.motion.div, _object_spread({}, animationConfig), /* @__PURE__ */ React9__default.default.createElement(MonthView, {
        classNames: classNames === null || classNames === void 0 ? void 0 : classNames.buttons,
        prevButton: CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customButtons4 = CustomComponents.customButtons) === null || _CustomComponents_customButtons4 === void 0 ? void 0 : _CustomComponents_customButtons4.CustomPrevButton,
        nextButton: CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customButtons5 = CustomComponents.customButtons) === null || _CustomComponents_customButtons5 === void 0 ? void 0 : _CustomComponents_customButtons5.CustomNextButton,
        CustomEventComponent: CustomComponents === null || CustomComponents === void 0 ? void 0 : CustomComponents.CustomEventComponent,
        CustomEventModal: CustomComponents === null || CustomComponents === void 0 ? void 0 : CustomComponents.CustomEventModal
    })))), (CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customButtons6 = CustomComponents.customButtons) === null || _CustomComponents_customButtons6 === void 0 ? void 0 : _CustomComponents_customButtons6.CustomAddEventButton) ? /* @__PURE__ */ React9__default.default.createElement("div", {
        onClick: function() {
            return handleAddEvent();
        },
        className: "absolute top-0 right-0"
    }, CustomComponents === null || CustomComponents === void 0 ? void 0 : CustomComponents.customButtons.CustomAddEventButton) : /* @__PURE__ */ React9__default.default.createElement(button.Button, {
        onClick: function() {
            return handleAddEvent();
        },
        className: "absolute top-0 right-0 " + (classNames === null || classNames === void 0 ? void 0 : (_classNames_buttons = classNames.buttons) === null || _classNames_buttons === void 0 ? void 0 : _classNames_buttons.addEvent),
        color: "primary",
        startContent: /* @__PURE__ */ React9__default.default.createElement(lucideReact.Calendar, null)
    }, "Adicionar Evento"))));
}
exports.SchedularView = SchedulerViewFilteration;
exports.SchedulerProvider = SchedulerProvider;
exports.eventSchema = eventSchema;
exports.useScheduler = useScheduler;
exports.variants = variants; //# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map