import React from 'react'
import Card from './components/Card'

const App = () => {
  
  const users = [
  {
    userImage: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    backgroundImage: "https://picsum.photos/id/1011/800/400",
    name: "Arjun Mehta",
    desc: "Frontend developer building responsive and clean user interfaces.",
    likeCount: 1240,
    postCount: 56,
    viewsCount: 18200,
  },
  {
    userImage: "https://randomuser.me/api/portraits/women/12.jpg",
    backgroundImage: "https://picsum.photos/id/1015/800/400",
    name: "Sneha Rao",
    desc: "UI/UX designer focused on intuitive and aesthetic designs.",
    likeCount: 980,
    postCount: 42,
    viewsCount: 15030,
  },
  {
    userImage: "https://randomuser.me/api/portraits/men/13.jpg",
    backgroundImage: "https://picsum.photos/id/1016/800/400",
    name: "Rohit Sharma",
    desc: "Full-stack developer creating scalable web applications.",
    likeCount: 2150,
    postCount: 73,
    viewsCount: 25480,
  },
  {
    userImage: "https://randomuser.me/api/portraits/women/14.jpg",
    backgroundImage: "https://picsum.photos/id/1021/800/400",
    name: "Ananya Gupta",
    desc: "Content creator sharing coding tutorials and tech tips.",
    likeCount: 1760,
    postCount: 65,
    viewsCount: 22140,
  },
  {
    userImage: "https://images.unsplash.com/photo-1559893088-c0787ebfc084?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    backgroundImage: "https://picsum.photos/id/1024/800/400",
    name: "Kunal Verma",
    desc: "Backend engineer specializing in APIs and databases.",
    likeCount: 890,
    postCount: 38,
    viewsCount: 11900,
  },
  {
    userImage: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    backgroundImage: "https://picsum.photos/id/1027/800/400",
    name: "Pooja Nair",
    desc: "Digital artist creating modern illustrations and visuals.",
    likeCount: 2450,
    postCount: 81,
    viewsCount: 30120,
  },
  {
    userImage: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    backgroundImage: "https://picsum.photos/id/1031/800/400",
    name: "Aditya Kulkarni",
    desc: "Mobile app developer crafting smooth Android experiences.",
    likeCount: 1320,
    postCount: 49,
    viewsCount: 17450,
  },
  {
    userImage: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    backgroundImage: "https://picsum.photos/id/1035/800/400",
    name: "Neha Joshi",
    desc: "Tech blogger writing about JavaScript and web trends.",
    likeCount: 1100,
    postCount: 44,
    viewsCount: 16380,
  },
  {
    userImage: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    backgroundImage: "https://picsum.photos/id/1039/800/400",
    name: "Siddharth Iyer",
    desc: "DevOps engineer automating cloud infrastructure workflows.",
    likeCount: 760,
    postCount: 29,
    viewsCount: 9800,
  },
  {
    userImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    backgroundImage: "https://picsum.photos/id/1043/800/400",
    name: "Riya Malhotra",
    desc: "Product designer turning ideas into meaningful experiences.",
    likeCount: 1980,
    postCount: 67,
    viewsCount: 23760,
  },
];

  return (
    <div className='h-screen w-screen auto bg-black p-3 flex justify-center flex-wrap overflow-y-auto gap-[10px]'>
      {users.map(function(elem,idx){
        return <Card data={elem} key={idx}/>
      })}
    </div>
  )
}

export default App
