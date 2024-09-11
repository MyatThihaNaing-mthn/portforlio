import { useEffect, useRef } from "react"
import { RiCloseFill } from "react-icons/ri";
import PropTypes from "prop-types";

export default function Drawer({ isMenuOpen, setMenuOpen, onNavigation }) {
    const open = isMenuOpen ? " translate-x-0 " : "translate-x-full"
    const drawerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (drawerRef.current && !drawerRef.current.contains(e.target) && isMenuOpen) {
                setMenuOpen(false)
            }
        }
        const handleEsc = (e) => {
            if (e.key === 'Esceape' && isMenuOpen) {
                setMenuOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEsc);
        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEsc);
        }
    }
        , [isMenuOpen, setMenuOpen])
    return (
        <>
        {isMenuOpen && (
                <div 
                    className="fixed top-0 left-0 w-full h-screen z-30 transition-all duration-300"
                    style={{
                        backdropFilter: 'blur(5px)',
                        WebkitBackdropFilter: 'blur(5px)', // For Safari support
                    }}
                    onClick={() => setMenuOpen(false)}
                />
            )}

            {isMenuOpen && (
                <RiCloseFill
                    className=" fixed z-40 top-8 right-4 cursor-pointer"
                    size={32}
                    onClick={() => setMenuOpen(false)}
                />
            )}
            <aside ref={drawerRef} className={`drawer ${open} transform duration-500 right-0 top-0`}>
                <nav>
                    {['About', 'Experience', 'Work', 'Contact'].map((item) => (
                        <div
                            key={item}
                            className="inline-block text-inherit relative transition-all w-full px-5 pb-5 pt-3 cursor-pointer"
                            onClick={() => {
                                setMenuOpen(false);
                                onNavigation(item.toLowerCase());
                            }}
                        >
                            {item}
                        </div>
                    ))}
                    <a className=' resume-button'
                                    href='/src/assets/content/resume.pdf'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Resume
                    </a>
                </nav>
            </aside>
        </>
    )
}

Drawer.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
    setMenuOpen: PropTypes.func.isRequired,
    onNavigation: PropTypes.func.isRequired
}