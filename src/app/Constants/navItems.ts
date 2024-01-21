export interface navItemsProps {
  id:number
  title:string;
  route:string;
}

const navItems: navItemsProps[] = [
  {
    id:0,
    title:'Work.',
    route:'/work'
  },
  {
    id:1,
    title:'About.',
    route:'/work'
  },
  {
    id:2,
    title:'Reach.',
    route:'/work'
  },
]

export default navItems;