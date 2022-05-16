export const state = () => ({
    counter: 0,
    messages: []
   })

   export const mutations = {
    addMessage(state, newMessage) {
    state.messages.push(newMessage.message)
    },
    
    increment(state) {
        state.counter++
        }
       
}
   
   export const actions = {
   }
   