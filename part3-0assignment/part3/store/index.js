export const state = () => ({
    tableRows: []
})

export const mutations = {
    addRow(state, tableRow) {
        const index = state.tableRows.findIndex(object => object.id == tableRow.id)

        if(index === -1){
            state.tableRows.push(tableRow)
            console.log(state)
        }
    }
}

export const actions = {
    async loadData({ commit }) {
        var axios = require('axios')
        let options = {
            url: "https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/nulmeting/todo",
            method: "GET",
            headers: {
                "x-api-key": "key"
            }
        }
        try{let response = await axios(options);
        commit("addRow", response.data.todo)}
        catch(error) {
            console.error(error);
        };
    }

}

