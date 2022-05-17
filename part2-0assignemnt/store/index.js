export const state = () => ({
    counter: 0,
    messages: [],
    formData: []
   })

   export const mutations = {
    addMessage(state, newMessage) {
    state.messages.push(newMessage.message)
    },

    addForm(state, formData){
        state.formData.push(formData)
        console.log(state)
    },
    
    increment(state) {
        state.counter++
        }
       
}
   
   export const actions = {
    async echo ({ commit }, formData) { 
        var axios = require('axios')
        let data = {
        echo: formData
        } 
        let options = {
        url: "https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/echo",
        method: "POST",
        headers: {
        "x-api-key": "key"
        },
        data
        }
        let response = await axios(options);
        commit('addForm', response.data);
        }
        }
   
   