import { useRef, useState } from 'react'
import arrow from '../assets/arrow.png'

function Main() {
  const [imageUrl, setImageUrl] = useState(null)
  const imgRef = useRef(null)

  const onChangeImage = () => {
    const reader = new FileReader()
    const file = imgRef.current.files[0]
    console.log(file)

    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImageUrl(reader.result)
      console.log("이미지주소", reader.result)
    }
  }

  const onClickFileBtn = () => {
    imgRef.current.click();
  };

  return (
    <div className="flex justify-center flex-col">
      <img className="max-w-[300px] rounded-2xl" src={imageUrl ? imageUrl : "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}></img>
      <input className="hidden" type="file" ref={imgRef} onChange={onChangeImage}></input>
      <button className="mt-5 w-20 h-20 bg-white rounded-2xl" onClick={ () => {onClickFileBtn()} }>
        <img src={arrow} />
      </button>
    </div>
  )
}

export default Main