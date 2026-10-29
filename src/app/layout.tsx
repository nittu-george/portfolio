import type {Metadata} from 'next';
import {Header,Footer} from '@/components/site';
import {profile} from '@/data/portfolio';
import './globals.css';
export const metadata:Metadata={title:{default:`${profile.name} | Instructional Design Portfolio`,template:`%s | ${profile.name}`},description:'Thoughtful learning experiences: explore VILT, ILT, microlearning and storyboarding concept projects.',robots:{index:true,follow:true}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><a href="#main" className="skip-link">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>}
