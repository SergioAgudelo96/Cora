"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"

type User = {
  id: string
  name: string
  email: string
  role: "physician"
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  // Public routes that don't require authentication
  const publicRoutes = ["/", "/login", "/signup", "/learn-more", "/forgot-password"]

  useEffect(() => {
    // Check if user is logged in (from localStorage in this example)
    const storedUser = localStorage.getItem("corapp_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    // Redirect unauthenticated users away from protected routes
    if (!isLoading && !user) {
      const isPublicRoute = publicRoutes.some((route) => pathname === route || pathname.startsWith(route + "/"))
      if (!isPublicRoute) {
        router.push("/")
      }
    }
  }, [user, isLoading, pathname, router])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // In a real app, this would be an API call
      // Simulating a successful login
      const mockUser: User = {
        id: "user_123",
        name: "Dr. Jane Smith",
        email: email,
        role: "physician",
      }

      // Store user in localStorage
      localStorage.setItem("corapp_user", JSON.stringify(mockUser))
      setUser(mockUser)
      router.push("/dashboard")
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true)
    try {
      // In a real app, this would be an API call
      // Simulating a successful signup
      const mockUser: User = {
        id: "user_" + Math.random().toString(36).substr(2, 9),
        name: name,
        email: email,
        role: "physician",
      }

      // Store user in localStorage
      localStorage.setItem("corapp_user", JSON.stringify(mockUser))
      setUser(mockUser)
      router.push("/onboarding")
    } catch (error) {
      console.error("Signup failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("corapp_user")
    setUser(null)
    router.push("/")
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {!isLoading && (
        <>
          {!user && !publicRoutes.some((route) => pathname === route || pathname.startsWith(route + "/")) ? (
            // Redirect to entrance page if trying to access protected route without auth
            <div className="flex min-h-screen items-center justify-center">
              <p>Redirecting to login...</p>
            </div>
          ) : (
            children
          )}
        </>
      )}
    </AuthContext.Provider>
  )
}
