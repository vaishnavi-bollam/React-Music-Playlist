import React from 'react'

class TrackItem extends React.Component {
  render() {
    const {track, onDelete} = this.props
    return (
      <li className="track-item">
        <img src={track.imageUrl} className="track-image" alt="track" />
        <div className="track-details">
          <p className="track-name">{track.name}</p>
          <p className="track-genre">{track.genre}</p>
        </div>
        <div className="track-actions">
          <p className="track-duration">{track.duration}</p>
          <button
            data-testid="delete"
            type="button"
            className="delete-button"
            onClick={() => onDelete(track.id)}
          >
            Delete
          </button>
        </div>
      </li>
    )
  }
}

export default TrackItem
