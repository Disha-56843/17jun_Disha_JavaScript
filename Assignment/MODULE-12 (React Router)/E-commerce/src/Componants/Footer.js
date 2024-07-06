import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className='w-100 mx-auto shadow bg-white p-2' style={{position:"fixed", bottom:"0"}}>
        <svg xmlns="http://www.w3.org/2000/svg" className='ms-4' width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M14.07 3.56701C14.6105 3.11279 15.294 2.86377 16 2.86377C16.706 2.86377 17.3895 3.11279 17.93 3.56701L26.93 11.135C27.265 11.4165 27.5344 11.7679 27.7192 12.1645C27.9041 12.5612 27.9999 12.9934 28 13.431V26.001C28 26.5314 27.7893 27.0402 27.4142 27.4152C27.0391 27.7903 26.5304 28.001 26 28.001H20.5C19.9696 28.001 19.4609 27.7903 19.0858 27.4152C18.7107 27.0402 18.5 26.5314 18.5 26.001V19.001H13.5V26.001C13.5 26.5314 13.2893 27.0402 12.9142 27.4152C12.5391 27.7903 12.0304 28.001 11.5 28.001H6C5.46957 28.001 4.96086 27.7903 4.58579 27.4152C4.21071 27.0402 4 26.5314 4 26.001V13.43C4.00011 12.9924 4.09595 12.5602 4.28079 12.1635C4.46562 11.7669 4.73499 11.4155 5.07 11.134L14.07 3.56601V3.56701Z" fill="#002482" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className='ms-5' width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M29.975 24.9823L24.9072 19.9145L21.0093 18.3041C22.3072 16.4583 23.0025 14.2564 23 12C23 5.93456 18.0654 1 12 1C5.93456 1 1 5.93456 1 12C1 18.0654 5.93456 23 12 23C14.276 23.0026 16.4962 22.2952 18.3512 20.9764L19.9574 24.8639L25.025 29.9319C25.35 30.257 25.7358 30.5148 26.1605 30.6907C26.5851 30.8666 27.0403 30.9571 27.4999 30.9572C27.9595 30.9572 28.4147 30.8667 28.8393 30.6908C29.264 30.5149 29.6498 30.2571 29.9748 29.9321C30.2999 29.6071 30.5577 29.2213 30.7336 28.7966C30.9095 28.372 31.0001 27.9168 31.0001 27.4572C31.0001 26.9976 30.9096 26.5424 30.7337 26.1178C30.5578 25.6931 30.3 25.3073 29.975 24.9823V24.9823ZM3 12C3 7.0375 7.0375 3 12 3C16.9625 3 21 7.0375 21 12C21 16.9625 16.9625 21 12 21C7.0375 21 3 16.9625 3 12ZM28.5607 28.5177C28.2792 28.7986 27.8977 28.9564 27.5 28.9564C27.1023 28.9564 26.7208 28.7986 26.4393 28.5177L21.6536 23.732L20.1602 20.1173L23.775 21.6107L28.5608 26.3964C28.8417 26.678 28.9994 27.0594 28.9994 27.4571C28.9993 27.8548 28.8416 28.2362 28.5607 28.5177V28.5177Z" fill="#848484" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className='ms-5' width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M4 16C1 12 2 6.00004 7 4.00004C12 2.00004 15 6.00004 16 8.00004C17 6.00004 21 2.00004 26 4.00004C31 6.00004 31 12 28 16C25 20 16 28 16 28C16 28 7 20 4 16Z" stroke="#848484" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className='ms-5' width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 2C17.3261 2 18.5979 2.52678 19.5355 3.46447C20.4732 4.40215 21 5.67392 21 7V8H11V7C11 5.67392 11.5268 4.40215 12.4645 3.46447C13.4021 2.52678 14.6739 2 16 2ZM23 8V7C23 5.14348 22.2625 3.36301 20.9497 2.05025C19.637 0.737498 17.8565 0 16 0C14.1435 0 12.363 0.737498 11.0503 2.05025C9.7375 3.36301 9 5.14348 9 7V8H2V28C2 29.0609 2.42143 30.0783 3.17157 30.8284C3.92172 31.5786 4.93913 32 6 32H26C27.0609 32 28.0783 31.5786 28.8284 30.8284C29.5786 30.0783 30 29.0609 30 28V8H23ZM4 10H28V28C28 28.5304 27.7893 29.0391 27.4142 29.4142C27.0391 29.7893 26.5304 30 26 30H6C5.46957 30 4.96086 29.7893 4.58579 29.4142C4.21071 29.0391 4 28.5304 4 28V10Z" fill="#848484" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className='ms-5' width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M26.8287 23.8625C26.2392 22.4662 25.3837 21.1978 24.3099 20.1281C23.2394 19.0553 21.9713 18.2 20.5756 17.6094C20.5631 17.6031 20.5506 17.6 20.5381 17.5938C22.4849 16.1875 23.7506 13.8969 23.7506 11.3125C23.7506 7.03125 20.2818 3.5625 16.0006 3.5625C11.7193 3.5625 8.25057 7.03125 8.25057 11.3125C8.25057 13.8969 9.51619 16.1875 11.4631 17.5969C11.4506 17.6031 11.4381 17.6062 11.4256 17.6125C10.0256 18.2031 8.76932 19.05 7.69119 20.1313C6.61841 21.2018 5.76308 22.4699 5.17244 23.8656C4.5922 25.232 4.27926 26.697 4.25057 28.1812C4.24973 28.2146 4.25558 28.2478 4.26777 28.2788C4.27996 28.3099 4.29824 28.3382 4.32154 28.3621C4.34484 28.386 4.37268 28.4049 4.40343 28.4179C4.43418 28.4308 4.4672 28.4375 4.50057 28.4375H6.37557C6.51307 28.4375 6.62244 28.3281 6.62557 28.1938C6.68807 25.7812 7.65682 23.5219 9.36932 21.8094C11.1412 20.0375 13.4943 19.0625 16.0006 19.0625C18.5068 19.0625 20.8599 20.0375 22.6318 21.8094C24.3443 23.5219 25.3131 25.7812 25.3756 28.1938C25.3787 28.3313 25.4881 28.4375 25.6256 28.4375H27.5006C27.5339 28.4375 27.567 28.4308 27.5977 28.4179C27.6285 28.4049 27.6563 28.386 27.6796 28.3621C27.7029 28.3382 27.7212 28.3099 27.7334 28.2788C27.7456 28.2478 27.7514 28.2146 27.7506 28.1812C27.7193 26.6875 27.4099 25.2344 26.8287 23.8625ZM16.0006 16.6875C14.5662 16.6875 13.2162 16.1281 12.2006 15.1125C11.1849 14.0969 10.6256 12.7469 10.6256 11.3125C10.6256 9.87813 11.1849 8.52812 12.2006 7.5125C13.2162 6.49687 14.5662 5.9375 16.0006 5.9375C17.4349 5.9375 18.7849 6.49687 19.8006 7.5125C20.8162 8.52812 21.3756 9.87813 21.3756 11.3125C21.3756 12.7469 20.8162 14.0969 19.8006 15.1125C18.7849 16.1281 17.4349 16.6875 16.0006 16.6875Z" fill="#848484" />
        </svg>
      </footer>
    </div>
  )
}