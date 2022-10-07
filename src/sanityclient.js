import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'tv3g9kr3',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-02-01',
    token: process.env.REACT_APP_SANITY_TOKEN,
})


const builder = imageUrlBuilder(client)

export const urlFor = (source) =>  {
    return builder.image(source)
}