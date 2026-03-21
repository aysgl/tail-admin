export type UserRow = {
  name: string
  role: string
  avatar: string
  project: string
  team: string[]
  status: string
  budget: string
  date?: string
}

export const TABLE_USERS: UserRow[] = [
  {
    name: 'Lindsey Curtis',
    role: 'Web Designer',
    avatar: '/images/user/user-17.jpg',
    project: 'Agency Website',
    team: [
      '/images/user/user-22.jpg',
      '/images/user/user-23.jpg',
      '/images/user/user-24.jpg',
    ],
    status: 'Active',
    budget: '3.9K',
    date: '2025-01-15',
  },
  {
    name: 'Kaiya George',
    role: 'Project Manager',
    avatar: '/images/user/user-18.jpg',
    project: 'Technology',
    team: [
      '/images/user/user-25.jpg',
      '/images/user/user-26.jpg',
    ],
    status: 'Pending',
    budget: '24.9K',
    date: '2025-02-20',
  },
  {
    name: 'Zain Geidt',
    role: 'Content Writer',
    avatar: '/images/user/user-19.jpg',
    project: 'Blog Writing',
    team: ['/images/user/user-27.jpg'],
    status: 'Active',
    budget: '12.7K',
    date: '2025-01-28',
  },
  {
    name: 'Abram Schleifer',
    role: 'Digital Marketer',
    avatar: '/images/user/user-20.jpg',
    project: 'Social Media',
    team: [
      '/images/user/user-28.jpg',
      '/images/user/user-29.jpg',
      '/images/user/user-30.jpg',
    ],
    status: 'Cancel',
    budget: '2.8K',
    date: '2025-03-05',
  },
  {
    name: 'Carla George',
    role: 'Front-end Developer',
    avatar: '/images/user/user-21.jpg',
    project: 'Website',
    team: [
      '/images/user/user-31.jpg',
      '/images/user/user-32.jpg',
      '/images/user/user-33.jpg',
    ],
    status: 'Active',
    budget: '4.5K',
    date: '2025-02-12',
  },
]
