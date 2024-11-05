const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
  <a href="https://github.com/hasirali" target="_blank" rel="noopener noreferrer" className="social-icon">
    <img src="/assets/github.svg" alt="GitHub" className="w-1/2 h-1/2" />
  </a>
  <a href="https://twitter.com/haxir_ali" target="_blank" rel="noopener noreferrer" className="social-icon">
    <img src="/assets/twitter.svg" alt="Twitter" className="w-1/2 h-1/2" />
  </a>
  <a href="https://www.linkedin.com/in/hasir-ali-b649851aa/" target="_blank" rel="noopener noreferrer" className="social-icon">
    <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-1/2 h-1/2" />
  </a>
  <a href="https://www.facebook.com/profile.php?id=100095270901385" target="_blank" rel="noopener noreferrer" className="social-icon">
    <img src="/assets/facebook.svg" alt="Facebook" className="w-1/2 h-1/2" />
  </a>
  <a href="https://www.geeksforgeeks.org/user/hasira804/" target="_blank" rel="noopener noreferrer" className="social-icon">
    <img src="/assets/gfg.svg" alt="GeeksforGeeks" className="w-1/2 h-1/2" />
  </a>
  <a href="https://leetcode.com/u/hasira804/" target="_blank" rel="noopener noreferrer" className="social-icon">
    <img src="/assets/leetcode.svg" alt="LeetCode" className="w-1/2 h-1/2" />
  </a>
</div>


      <p className="text-white-500">© 2024 Hasir Ali. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
