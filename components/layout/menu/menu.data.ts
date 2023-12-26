export interface MenuItem {
    name: string
    url: string
    icon: string
}

export const MENU_DATA: MenuItem[] = [
    {
        icon: 'radix-icons:dashboard',
        name: 'Home',
        url: '/'
    },
    {
        icon: 'ep:goods',
        name: 'Products',
        url: '/products'
    },
    {
        icon: 'ph:contactless-payment',
        name: 'Payments',
        url: '/payments'
    },
    {
        icon: 'mingcute:group-line',
        name: 'Customers',
        url: '/customers'
    },
    {
        icon: 'radix-icons:gear',
        name: 'Settings',
        url: '/settings'
    },
]