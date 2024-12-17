import CursorSVG from '@/public/assets/CursorSVG'
import { CursorChatProps, CursorMode } from '@/types/type'
import React from 'react'

const CursorChat = ({cursor,cursorState,setCursorState,updateMyPresence}:CursorChatProps) => {
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {}
  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {}
  return (
    <div
      className="absolute top-0 left-0" style={{transform:`translate(${cursor.x}px,${cursor.y}px)`}}
    >
      {/* {cursorState.mode===CursorMode.Chat && ( */}
        <>
          <CursorSVG color="#000"/>
          <div className="absolute left-2 top-5 bg-blue-500 text-white px-4 py-2  text-sm leading-relaxed text-white rounded-[20px]">
            {cursorState.previousMessage && (
              <div>{cursorState.previousMessage}</div>
            )}
            <input
             className="z-10 w-60 bg-transparent border-none outline-none text-white placeholder-blue-300" autoFocus={true}
             onChange={handleChange}
             onKeyDown={handleKeyDown}
             placeholder={cursorState.previousMessage ? "" : "Press Enter to chat"}
             value={cursorState.message}
             maxLength={500}
            />
          </div>
        </>
        
      {/* )} */}
    </div>
  )
}

export default CursorChat