import '../styles/MusicPlayer.css'

export default function MusicPlayer({ albumName = 'Unknown Album', songName = 'Placeholder for the song name', artistName = 'Unknown Artist' }) {
    return (
        <div className="musicplayer">
            <div className='musicplayer__song'>
                <img src="" alt="" className='musicplayer__cover' />
                <h3>{albumName}</h3>
                <h2>{songName}</h2>
                <p>{artistName}</p>
            </div>

            <div className='musicplayer__controls'>
                <i className="fa fa-random" aria-hidden="true"></i>
                <i className="fa fa-backward" aria-hidden="true"></i>
                <i className="fa fa-play-circle" aria-hidden="true"></i>
                <i className="fa fa-forward" aria-hidden="true"></i>
                <i className="fa fa-expand" aria-hidden="true"></i>
            </div>

            <div className='musicplayer__share'>
                <i className="fa fa-share-alt" aria-hidden="true"></i>
            </div>

        </div>
    )
}

