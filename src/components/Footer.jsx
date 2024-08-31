export default function Footer() {
    return (
        <footer>
            <div className='justify-center items-center text-center p-1 bg-gray-200'>
                <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
            </div>
        </footer>
    )
}
