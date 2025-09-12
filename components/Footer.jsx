// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full py-4 bg-gray-800 text-center text-sm text-white z-50">
      <p>
        © {new Date().getFullYear()} Simon Game | Built with ❤️ by{" "}
        <a
          className="hover:text-pink-500 dark:hover:text-pink-400 hover:underline transition"
          href="https://github.com/Aan-seth"
          target="_blank"
          rel="noreferrer"
        >
          Aanchal
        </a>
      </p>
    </footer>
  )
}
