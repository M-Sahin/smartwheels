import { render, screen } from '@testing-library/react'
import { Navigation } from '@/components/navigation'

jest.mock('next/link', () => {
  return ({ children, href }: any) => {
    return <a href={href}>{children}</a>
  }
})

describe('Navigation Component', () => {
  it('should render the logo', () => {
    render(<Navigation />)
    expect(screen.getByText('SmartWheels')).toBeInTheDocument()
  })

  it('should render all navigation links', () => {
    render(<Navigation />)
    
    expect(screen.getByText('Diensten')).toBeInTheDocument()
    expect(screen.getByText('Projecten')).toBeInTheDocument()
    expect(screen.getByText('Over Ons')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('should have correct href attributes', () => {
    render(<Navigation />)
    
    const dienstenLink = screen.getByText('Diensten').closest('a')
    expect(dienstenLink).toHaveAttribute('href', '/diensten')

    const projectenLink = screen.getByText('Projecten').closest('a')
    expect(projectenLink).toHaveAttribute('href', '/projecten')
  })
})