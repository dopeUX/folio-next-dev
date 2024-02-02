export interface navItemsProps {
  id:number
  title:string;
  route:string;
}

const navItems: navItemsProps[] = [
  {
    id:0,
    title:'index, ',
    route:'/home'
  },
  {
    id:1,
    title:'bout',
    route:'/bout'
  },
]

export default navItems;