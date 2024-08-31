import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const navigation = [
    { id: 1, name: 'Home', href: '/', current: true },
    { id: 2, name: 'Weather Card', href: '#weather-card', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <Disclosure as="nav" className="bg-transparent">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <DisclosureButton className="inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
                            <XMarkIcon className="hidden h-7 w-7" aria-hidden="true" />
                        </DisclosureButton>
                    </div>
                    {/* Brand Logo */}
                    <div className="flex flex-shrink-0 items-center">
                        <h1 className="text-3xl sm:text-4xl text-cloud-white font-bold">BrightCast</h1>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden sm:flex sm:ml-6 sm:space-x-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.id}
                                to={item.href}
                                aria-current={location.pathname === item.href ? 'page' : undefined}
                                className={classNames(
                                    location.pathname === item.href ? 'bg-seaBlue-900 text-white' : 'text-gray-200 hover:bg-seaBlue-700 hover:text-white',
                                    'rounded-md px-4 py-2 text-base font-medium'
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            {/* Mobile Menu Panel */}
            <DisclosurePanel className="sm:hidden bg-white rounded-xl w-full">
                <div className="space-y-1 px-3 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.id}
                            as={Link}
                            to={item.href}
                            aria-current={location.pathname === item.href ? 'page' : undefined}
                            className={classNames(
                                location.pathname === item.href ? 'bg-gray-900 text-white' : 'text-seaBlue-700 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-4 py-3 text-lg font-medium'
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}