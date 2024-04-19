import * as React from 'react'
import { Link } from 'gatsby'

export default function Header() {
    return (
        <header className="wrap">
            <Link to="/">
                <div className="logowrap">
                    <img
                        src="/images/sosoklogo.svg"
                        alt='sosok 로고'
                        style={{
                            width: '84px',
                            height: '18px'
                        }} />
                    <p className='s2'>통합고객센터</p>
                </div>
            </Link>
        </header>
    )
}