import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chat, Message } from '../types';

interface ChatState {
  chats: Chat[];
  currentChatId: string | null;
}

const initialState: ChatState = {
  chats: [],
  currentChatId: null
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    createChat: (state, action: PayloadAction<Chat>) => {
      state.chats.push(action.payload);
      state.currentChatId = action.payload.id;
    },
    setCurrentChat: (state, action: PayloadAction<string>) => {
      state.currentChatId = action.payload;
    },
    addMessage: (state, action: PayloadAction<{ chatId: string; message: Message }>) => {
      const chat = state.chats.find(c => c.id === action.payload.chatId);
      if (chat) {
        chat.messages.push(action.payload.message);
      }
    },
    updateMessage: (state, action: PayloadAction<{ chatId: string; messageId: string; content: string }>) => {
      const chat = state.chats.find(c => c.id === action.payload.chatId);
      if (chat) {
        const message = chat.messages.find(m => m.id === action.payload.messageId);
        if (message) {
          message.content = action.payload.content;
        }
      }
    },
    deleteChat: (state, action: PayloadAction<string>) => {
      state.chats = state.chats.filter(chat => chat.id !== action.payload);
      if (state.currentChatId === action.payload) {
        state.currentChatId = state.chats[0]?.id || null;
      }
    }
  }
});

export const { createChat, setCurrentChat, addMessage, updateMessage, deleteChat } = chatSlice.actions;
export default chatSlice.reducer;