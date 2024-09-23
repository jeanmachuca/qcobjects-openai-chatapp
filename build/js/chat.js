"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = __importDefault(require("qcobjects-openai-api/components"));
document.addEventListener("DOMContentLoaded", () => {
    document.body.append(components_1.default.chatbotComponent.body);
});
