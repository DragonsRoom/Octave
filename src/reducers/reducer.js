export const intialState = {
  playingSong: null,
  newSong: null,
  songIndex: -1,
  isSongListOpen: false,
};

export const reducer = (state, action) => {
  // console.log('Reducer state', state)
  console.log("Reducer action", action);
  switch (action.type) {
    case "SET_PLAYING_SONG":
      return {
        ...state,
        playingSong: action.playingSong,
      };

    case "SET_NEW_SONG":
      return {
        ...state,
        newSong: action.newSong,
      };
    case "SET_SONG_INDEX":
      return {
        ...state,
        songIndex: action.songIndex,
      };

    case "INC_SONG_INDEX":
      return {
        ...state,
        songIndex: state.songIndex + 1,
      };

    case "DEC_SONG_INDEX":
      return {
        ...state,
        songIndex: state.songIndex - 1,
      };

    case "TOGGLE_IS_SONGLIST_OPEN":
      return {
        ...state,
        isSongListOpen: !state.isSongListOpen,
      };

    default:
      return state;
  }
};
