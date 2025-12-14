import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true, // 'true' ist schneller (Cache), 'false' ist immer brandaktuell
})