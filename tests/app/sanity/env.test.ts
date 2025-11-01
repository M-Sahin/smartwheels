import { apiVersion, dataset, projectId } from '@/sanity/env'

describe('Sanity Environment Configuration', () => {
  it('should have correct API version', () => {
    expect(apiVersion).toBe('2024-11-01')
  })

  it('should have dataset defined', () => {
    expect(dataset).toBeDefined()
    expect(typeof dataset).toBe('string')
  })

  it('should have projectId defined', () => {
    expect(projectId).toBeDefined()
    expect(typeof projectId).toBe('string')
    expect(projectId).toBe('ckmy7d6l')
  })
})