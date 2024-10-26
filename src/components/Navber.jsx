
const Navber = () => {
    return (
        <div className='max-w-7xl bg-gray-500 rounded-xl p-6 mt-10 flex justify-between items-center mx-auto'>
           <h1 className='text-5xl font-bold text-black'>NavBar</h1>
           <ul className='flex gap-6'>
            <li><a className='text-2xl font-semibold text-slate-50'  href="/">Home</a></li>
            <li><a  className='text-2xl font-semibold text-slate-50' href="/about">About</a></li>
            <li><a className='text-2xl font-semibold text-slate-50'  href="/content">Content</a></li>
            <li><a className='text-2xl font-semibold text-slate-50'  href="/blog">Blog</a></li>
           </ul>
        </div>
    );
}; 

export default Navber;