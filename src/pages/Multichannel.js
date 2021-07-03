
import '../pages/Engineering.css';
const Multichannel=()=>{
    return(
        
        <div className="alpha">
            <div className="title">
            <h1>Multichannel Analysis of Surface Waves (MASW) </h1>
            </div>
        
        <div className="landing">
            
            <div className="gama">
            <h2>Introduction</h2>
            <p className="para-text">
                Multichannel Analysis of Surface Waves (MASW) method will measure the surface waves and in particular
                Rayleigh wave velocity, which is frequency dependent. Principally it considers the dispersive
                characteristic of acoustic waves i.e., a particular frequency would travel with particular velocity.
                Higher frequencies generated by the source will travel in the shallow layers only, whilst lower
                frequencies travel in both shallow and deep layers, velocity will vary with frequency. This is known as
                geometrical dispersion and to improve on the depth penetration lower frequencies component are desired
                but from experience working in Doha these are difficult to achieve. The MASW method will provide
                information to a maximum depth of 25-30m in best conditions.
                <br/>
                The acquisition principle of the multichannel method is carried out with the use of 24 or 48 low
                frequency geophones (4.5Hz) with constant receiver spacing along the line. The geophone array is towed
                behind a car with the geophones mounted on a land streamer or gliding plate. The seismic energy is
                produced with a sledge hammer or Propelled Energy Generator (PEG) source.
            </p>
            </div>
            <div className="img1">
            <img  src="img/services/multichannel.png"
                alt="No image found"  />
            </div>
        </div>
        </div>
    );
}
export default Multichannel;