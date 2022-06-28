interface Service {
    id: string,
    name: string,
    description: string,
    versions: Version[]
}

interface Version {
    id: string,
    name: string,
    description: string
}

export default Service