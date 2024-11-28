import client from "@sanity/client"

export default client({
    projectId: "7rmmoram",
    dataset: "production",
    useCdn: true,
    apiVersion: "2024-11-28"
})