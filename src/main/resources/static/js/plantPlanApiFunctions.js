let planIdent = 1;

const addPlantToPlan = async (plantId) => {
    if (planIdent < 1) await getNewPlan()
    console.log("Adding Plant " + plantId + " to Plan Id: 1")
    await putFetch("/api/plantplan/1/plant/" + plantId)
}

const removePlantFromPlan = async (plantId) => {
    console.log("Removing Plant " + plantId + " from Plan Id: 1")
    await deleteFetch("/api/plantplan/1/plant/" + plantId)
}

const putFetch = (url) => fetch(url, {method: 'PUT'})

const deleteFetch = (url) => fetch(url, {method: 'DELETE'})

const getNewPlan = () => fetch("/api/plantplan").then(res => res.json()).then(resJson => planIdent = resJson.id)