import{a as n,b as i,c as x}from"./chunk-VGJRBPUX.js";var C=i(d=>{"use strict";Object.defineProperty(d,"__esModule",{value:!0});d.ChatbotController=void 0;var k=x(),h=class h extends k.Controller{constructor(s){super(s);let{component:o}=s;this.chatMessages=o.shadowRoot?.subelements("#chat-messages").pop(),this.userInput=o.shadowRoot?.subelements("#user-input").pop()}closeChat(){this.component.body.remove()}sendMessage(){this.userInput.value.trim()!==""&&(this.addMessage(this.userInput.value,"user"),this.getBotResponse(this.userInput.value),this.userInput.value="")}addMessage(s,o){let a=document.createElement("div");a.textContent=s,a.classList.add("message",o),this.chatMessages.appendChild(a),this.chatMessages.scrollTop=this.chatMessages.scrollHeight}async getBotResponse(s){let o=document.createElement("div");o.textContent="Typing...",o.classList.add("message","bot"),this.chatMessages.appendChild(o);let a=await fetch("/api/openai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"gpt-4o-mini",messages:[{role:"user",content:s}],temperature:.7})});try{let c=await a.json();typeof c.error<"u"?o.textContent=c.error.message:o.textContent=c.choices[0].text.trim()}catch(c){console.error(c),o.textContent="I'm sorry! I got an error connecting to the server."}this.userInput.value="",this.chatMessages.scrollTop=this.chatMessages.scrollHeight}};n(h,"ChatbotController");var p=h;d.ChatbotController=p});var M=i(e=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.chatbotComponent=e.ChatBotComponent=void 0;e.sendMessage=v;e.closeChatbot=y;var g=x(),_=C(),b=class b extends g.Component{constructor(){super(...arguments),this.tplsource="inline",this.shadowed=!0,this.template=`
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #e5ddd5;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .chat-container {
            width: 100%;
            height: 100%;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            bottom: 0;
            right:0;
            left:0;
            position: fixed;
        }
        .chat-header {
            width: 100%;
            top:0;
            position: fixed;
            background-color: #075e54;
            color: #fff;
            padding: 15px;
            text-align: center;
            font-size: 1.2em;
        }
        .chat-messages {
            padding: 15px;
            flex: 1;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            background-color: #e5ddd5;
            justify-content: flex-end;
        }
        .chat-input {
            display: flex;
            border-top: 1px solid #ddd;
        }
        .chat-input input {
            flex: 1;
            padding: 15px;
            border: none;
            border-radius: 0;
            font-size: 1em;
        }
        .chat-input button {
            padding: 15px;
            background-color: #075e54;
            color: #fff;
            border: none;
            cursor: pointer;
            font-size: 1em;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .chat-input button img {
            width: 20px;
            height: 20px;
        }
        .message {
            margin: 10px 0;
            padding: 10px;
            border-radius: 10px;
            max-width: 70%;
        }
        .message.user {
            align-self: flex-end;
            background-color: #dcf8c6;
        }
        .message.bot {
            align-self: flex-start;
            background-color: #fff;
            border: 1px solid #ddd;
        }

        .chat-close-button 
        {
            color: white;
            position: absolute;
            top: 1px;
            right: 1px;
            background-color: transparent;
            border: none;
            font-size: 24px;
            cursor: pointer;
            z-index: 99999;
            border-radius: 50%;
            padding: 12px;
        }
        

    </style>

        <div class="chat-container">
            <div class="chat-close-button" onclick="global.get('closeChatbot')()">\u2B07\uFE0F</div>
            <div class="chat-header">QCObjects OpenAI Chatbot</div>
            <div class="chat-messages" id="chat-messages"></div>
            <div class="chat-input">
                <input type="text" id="user-input" placeholder="Type a message...">
                <button onclick="global.get('chatbotSendMessage')()">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/send.png" alt="Send">
                </button>
            </div>
        </div>
    `}};n(b,"ChatBotComponent");var l=b;e.ChatBotComponent=l;e.chatbotComponent=new l({name:"chatbot"});function v(){e.chatbotComponent.controller=new _.ChatbotController({component:e.chatbotComponent}),e.chatbotComponent.controller.sendMessage()}n(v,"sendMessage");function y(){e.chatbotComponent.controller=new _.ChatbotController({component:e.chatbotComponent}),e.chatbotComponent.controller.closeChat()}n(y,"closeChatbot");g.global.set("chatbotSendMessage",v);g.global.set("closeChatbot",y)});var w=i(m=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var f=M();m.default={chatbotComponent:f.chatbotComponent,ChatBotComponent:f.ChatBotComponent,sendMessage:f.sendMessage}});var j=i(r=>{"use strict";var q=r&&r.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(r,"__esModule",{value:!0});var O=q(w());r.default=O.default});var z=i(u=>{var I=u&&u.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(u,"__esModule",{value:!0});var T=I(j());document.addEventListener("DOMContentLoaded",()=>{document.body.append(T.default.chatbotComponent.body)})});export{z as a};
//# sourceMappingURL=chunk-NPLKSVUT.js.map
