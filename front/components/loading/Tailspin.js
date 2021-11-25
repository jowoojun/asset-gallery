import Loader from "react-loader-spinner";

const Tailspin = () => {
  return (
    <div style={{height: '500px'}}>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
        />
      </div>
    </div>
  )
}

export default Tailspin;