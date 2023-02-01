import "./loading.css";
import loading from './loading.GIF';

function App() {
  return (
    <>
    <div class="preloader">
      <div class="preloader-img">
          <span class="loading-animation animate-flicker">
            <img src={loading} alt="loading"/>
          </span>
      </div>
    </div>
    </>
  );
}

export default App;

