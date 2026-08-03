export default function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem("gpy-t");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
