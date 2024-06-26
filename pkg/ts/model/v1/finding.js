"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.176.0
//   protoc               unknown
// source: model/v1/finding.proto
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finding_MetadataEntry = exports.Finding = exports.finding_FindingTypeToJSON = exports.finding_FindingTypeFromJSON = exports.Finding_FindingType = exports.finding_SeverityToJSON = exports.finding_SeverityFromJSON = exports.Finding_Severity = exports.protobufPackage = void 0;
/* eslint-disable */
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "model.v1";
var Finding_Severity;
(function (Finding_Severity) {
    Finding_Severity[Finding_Severity["UNKNOWN"] = 0] = "UNKNOWN";
    Finding_Severity[Finding_Severity["INFO"] = 1] = "INFO";
    Finding_Severity[Finding_Severity["LOW"] = 2] = "LOW";
    Finding_Severity[Finding_Severity["MEDIUM"] = 3] = "MEDIUM";
    Finding_Severity[Finding_Severity["HIGH"] = 4] = "HIGH";
    Finding_Severity[Finding_Severity["CRITICAL"] = 5] = "CRITICAL";
    Finding_Severity[Finding_Severity["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Finding_Severity || (exports.Finding_Severity = Finding_Severity = {}));
function finding_SeverityFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return Finding_Severity.UNKNOWN;
        case 1:
        case "INFO":
            return Finding_Severity.INFO;
        case 2:
        case "LOW":
            return Finding_Severity.LOW;
        case 3:
        case "MEDIUM":
            return Finding_Severity.MEDIUM;
        case 4:
        case "HIGH":
            return Finding_Severity.HIGH;
        case 5:
        case "CRITICAL":
            return Finding_Severity.CRITICAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Finding_Severity.UNRECOGNIZED;
    }
}
exports.finding_SeverityFromJSON = finding_SeverityFromJSON;
function finding_SeverityToJSON(object) {
    switch (object) {
        case Finding_Severity.UNKNOWN:
            return "UNKNOWN";
        case Finding_Severity.INFO:
            return "INFO";
        case Finding_Severity.LOW:
            return "LOW";
        case Finding_Severity.MEDIUM:
            return "MEDIUM";
        case Finding_Severity.HIGH:
            return "HIGH";
        case Finding_Severity.CRITICAL:
            return "CRITICAL";
        case Finding_Severity.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.finding_SeverityToJSON = finding_SeverityToJSON;
var Finding_FindingType;
(function (Finding_FindingType) {
    Finding_FindingType[Finding_FindingType["UNKNOWN_TYPE"] = 0] = "UNKNOWN_TYPE";
    Finding_FindingType[Finding_FindingType["EXPLOIT"] = 1] = "EXPLOIT";
    Finding_FindingType[Finding_FindingType["SUSPICIOUS"] = 2] = "SUSPICIOUS";
    Finding_FindingType[Finding_FindingType["DEGRADED"] = 3] = "DEGRADED";
    Finding_FindingType[Finding_FindingType["INFORMATION"] = 4] = "INFORMATION";
    Finding_FindingType[Finding_FindingType["SCAM"] = 5] = "SCAM";
    Finding_FindingType[Finding_FindingType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Finding_FindingType || (exports.Finding_FindingType = Finding_FindingType = {}));
function finding_FindingTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN_TYPE":
            return Finding_FindingType.UNKNOWN_TYPE;
        case 1:
        case "EXPLOIT":
            return Finding_FindingType.EXPLOIT;
        case 2:
        case "SUSPICIOUS":
            return Finding_FindingType.SUSPICIOUS;
        case 3:
        case "DEGRADED":
            return Finding_FindingType.DEGRADED;
        case 4:
        case "INFORMATION":
            return Finding_FindingType.INFORMATION;
        case 5:
        case "SCAM":
            return Finding_FindingType.SCAM;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Finding_FindingType.UNRECOGNIZED;
    }
}
exports.finding_FindingTypeFromJSON = finding_FindingTypeFromJSON;
function finding_FindingTypeToJSON(object) {
    switch (object) {
        case Finding_FindingType.UNKNOWN_TYPE:
            return "UNKNOWN_TYPE";
        case Finding_FindingType.EXPLOIT:
            return "EXPLOIT";
        case Finding_FindingType.SUSPICIOUS:
            return "SUSPICIOUS";
        case Finding_FindingType.DEGRADED:
            return "DEGRADED";
        case Finding_FindingType.INFORMATION:
            return "INFORMATION";
        case Finding_FindingType.SCAM:
            return "SCAM";
        case Finding_FindingType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.finding_FindingTypeToJSON = finding_FindingTypeToJSON;
function createBaseFinding() {
    return {
        protocol: "",
        severity: 0,
        metadata: {},
        type: 0,
        alertId: "",
        name: "",
        description: "",
        timestamp: "",
        uniqueKey: "",
    };
}
exports.Finding = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.protocol !== "") {
            writer.uint32(10).string(message.protocol);
        }
        if (message.severity !== 0) {
            writer.uint32(16).int32(message.severity);
        }
        Object.entries(message.metadata).forEach(([key, value]) => {
            exports.Finding_MetadataEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        if (message.type !== 0) {
            writer.uint32(32).int32(message.type);
        }
        if (message.alertId !== "") {
            writer.uint32(42).string(message.alertId);
        }
        if (message.name !== "") {
            writer.uint32(50).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(58).string(message.description);
        }
        if (message.timestamp !== "") {
            writer.uint32(66).string(message.timestamp);
        }
        if (message.uniqueKey !== "") {
            writer.uint32(74).string(message.uniqueKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFinding();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.protocol = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.severity = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    const entry3 = exports.Finding_MetadataEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.metadata[entry3.key] = entry3.value;
                    }
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.alertId = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.timestamp = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.uniqueKey = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            protocol: isSet(object.protocol) ? globalThis.String(object.protocol) : "",
            severity: isSet(object.severity) ? finding_SeverityFromJSON(object.severity) : 0,
            metadata: isObject(object.metadata)
                ? Object.entries(object.metadata).reduce((acc, [key, value]) => {
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
            type: isSet(object.type) ? finding_FindingTypeFromJSON(object.type) : 0,
            alertId: isSet(object.alertId) ? globalThis.String(object.alertId) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            timestamp: isSet(object.timestamp) ? globalThis.String(object.timestamp) : "",
            uniqueKey: isSet(object.uniqueKey) ? globalThis.String(object.uniqueKey) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.protocol !== "") {
            obj.protocol = message.protocol;
        }
        if (message.severity !== 0) {
            obj.severity = finding_SeverityToJSON(message.severity);
        }
        if (message.metadata) {
            const entries = Object.entries(message.metadata);
            if (entries.length > 0) {
                obj.metadata = {};
                entries.forEach(([k, v]) => {
                    obj.metadata[k] = v;
                });
            }
        }
        if (message.type !== 0) {
            obj.type = finding_FindingTypeToJSON(message.type);
        }
        if (message.alertId !== "") {
            obj.alertId = message.alertId;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.timestamp !== "") {
            obj.timestamp = message.timestamp;
        }
        if (message.uniqueKey !== "") {
            obj.uniqueKey = message.uniqueKey;
        }
        return obj;
    },
    create(base) {
        return exports.Finding.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseFinding();
        message.protocol = (_a = object.protocol) !== null && _a !== void 0 ? _a : "";
        message.severity = (_b = object.severity) !== null && _b !== void 0 ? _b : 0;
        message.metadata = Object.entries((_c = object.metadata) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = globalThis.String(value);
            }
            return acc;
        }, {});
        message.type = (_d = object.type) !== null && _d !== void 0 ? _d : 0;
        message.alertId = (_e = object.alertId) !== null && _e !== void 0 ? _e : "";
        message.name = (_f = object.name) !== null && _f !== void 0 ? _f : "";
        message.description = (_g = object.description) !== null && _g !== void 0 ? _g : "";
        message.timestamp = (_h = object.timestamp) !== null && _h !== void 0 ? _h : "";
        message.uniqueKey = (_j = object.uniqueKey) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
function createBaseFinding_MetadataEntry() {
    return { key: "", value: "" };
}
exports.Finding_MetadataEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFinding_MetadataEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? globalThis.String(object.key) : "",
            value: isSet(object.value) ? globalThis.String(object.value) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
    create(base) {
        return exports.Finding_MetadataEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFinding_MetadataEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
