import { render, screen, waitFor } from '@testing-library/react'
import ProjectenPage from '@/app/projecten/page'
import { client } from '@/sanity/lib/client'

jest.mock('@/sanity/lib/client', () => ({
  client: {
    fetch: jest.fn(),
  },
}))

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { fill, ...rest } = props
    return <img {...rest} />
  },
}))

jest.mock('@/components/navigation', () => ({
  Navigation: () => <nav>Navigation Mock</nav>,
}))

jest.mock('@/components/ui/button', () => ({
  Button: ({ children, asChild, ...props }: any) => <button {...props}>{children}</button>,
}))

const mockProjects = [
  {
    _id: '1',
    title: 'Voor & Na: Complete Velgreparatie',
    slug: { current: 'voor-na-complete-velgreparatie' },
    description: 'Deze velgen kwamen binnen met zware randschade en corrosie.',
    beforeImage: {
      _type: 'image',
      asset: {
        _ref: 'image-abc123-1920x1080-jpg',
        _type: 'reference',
      },
    },
    afterImage: {
      _type: 'image',
      asset: {
        _ref: 'image-def456-1920x1080-jpg',
        _type: 'reference',
      },
    },
    services: ['Richten', 'Reparatie', 'Poedercoaten'],
    order: 1,
  },
]

describe('Projecten Page', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render the page title', async () => {
    ;(client.fetch as jest.Mock).mockResolvedValue([])
    
    render(await ProjectenPage())
    
    expect(screen.getByText('Onze Projecten')).toBeInTheDocument()
  })

  it('should display stats section', async () => {
    ;(client.fetch as jest.Mock).mockResolvedValue([])
    
    render(await ProjectenPage())
    
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('Velgen gerestaureerd')).toBeInTheDocument()
    expect(screen.getByText('10+')).toBeInTheDocument()
    expect(screen.getByText('Jaar ervaring')).toBeInTheDocument()
  })

  it('should display CTA section', async () => {
    ;(client.fetch as jest.Mock).mockResolvedValue([])
    
    render(await ProjectenPage())
    
    expect(screen.getByText('Wilt u ook zo\'n resultaat?')).toBeInTheDocument()
    expect(screen.getByText('Vraag Offerte Aan')).toBeInTheDocument()
  })

  it('should call Sanity client with correct query', async () => {
    ;(client.fetch as jest.Mock).mockResolvedValue([])
    
    render(await ProjectenPage())
    
    expect(client.fetch).toHaveBeenCalledWith(
      expect.stringContaining('*[_type == "project"]')
    )
    expect(client.fetch).toHaveBeenCalledWith(
      expect.stringContaining('order(order asc)')
    )
  })
})