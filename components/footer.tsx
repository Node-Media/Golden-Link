import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MessageSquare } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200">
        {/* Left column - Newsletter */}
        <div className="p-8 border-r border-gray-200">
          <div className="mb-8">
            <Image src="/logo-mark.svg" alt="Golden Link" width={60} height={60} className="h-16 w-auto" />
          </div>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">Subscribe to our newsletter</p>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-gray-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-gray-500"
              />
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-gray-500"
                />
                <button className="ml-2 transition-transform hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <p className="text-xs text-gray-600 leading-relaxed">
              Golden Link acknowledges and pays respect to the past, present and future Traditional Custodians and
              Elders of Australia and the continuation of cultural, spiritual and educational practices of Aboriginal
              and Torres Strait Islander peoples.
            </p>
          </div>
        </div>

        {/* Middle column - Links */}
        <div className="p-8 border-r border-gray-200 md:border-r-0 lg:border-r">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs uppercase text-gray-400 mb-4">Social</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Pinterest
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase text-gray-400 mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Panels
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Slats
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Designer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 flex flex-wrap gap-4">
            {/* <Image src="/certification-1.svg" alt="Certification" width={40} height={40} />
            <Image src="/certification-2.svg" alt="Certification" width={40} height={40} />
            <Image src="/certification-3.svg" alt="Certification" width={40} height={40} />
            <Image src="/certification-4.svg" alt="Certification" width={40} height={40} />
            <Image src="/certification-5.svg" alt="Certification" width={40} height={40} /> */}
          </div>
          <div className="mt-4 text-xs text-gray-500">© Golden Link 2025</div>
        </div>

        {/* Right column - More Links */}
        <div className="p-8 hidden md:block lg:hidden">
          <div className="grid grid-cols-1 gap-8">
            <div>
              <h3 className="text-xs uppercase text-gray-400 mb-4">Projects</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Health and Aged Care
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Arts and Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Commercial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Education
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16">
            <h3 className="text-xs uppercase text-gray-400 mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-sm">1800 835 035</p>
              <p className="text-sm">letstalk@golden-link.com</p>
            </div>
          </div>
        </div>

        {/* Right column for large screens */}
        <div className="p-8 hidden lg:block">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs uppercase text-gray-400 mb-4">Projects</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Health and Aged Care
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Arts and Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Commercial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Education
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase text-gray-400 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Work With Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    DSA End-of-Life Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Modern Slavery Statement
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Supplier Code of Conduct
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16">
            <h3 className="text-xs uppercase text-gray-400 mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-sm">1800 835 035</p>
              <p className="text-sm">letstalk@golden-link.com</p>
            </div>
          </div>
        </div>

        {/* Additional mobile sections */}
        <div className="p-8 md:hidden">
          <div className="grid grid-cols-1 gap-8">
            <div>
              <h3 className="text-xs uppercase text-gray-400 mb-4">Projects</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Health and Aged Care
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Arts and Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Commercial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Education
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase text-gray-400 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    Work With Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-600 transition-colors">
                    DSA End-of-Life Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase text-gray-400 mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="text-sm">1111 111 111</p>
                <p className="text-sm">letstalk@golden-link.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      
    </footer>
  )
}
