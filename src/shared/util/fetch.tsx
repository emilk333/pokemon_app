


const genericFetch = async <T extends {}>(url:string) : Promise<T> => {

    const res = await fetch(url).catch(error => {
        throw new Error('Could not fetch data', {cause: error})
    })

    if (!res.ok) throw new Error(`Server responded with ${res.status}`)

    return await res.json();
}


export default genericFetch