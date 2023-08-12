import {createClient} from "@sanity/client";


export const client = createClient({
    projectId: "qiqby91w",
    dataset: "production",
    apiVersion: "2023-08-11",
    useCdn: true
})