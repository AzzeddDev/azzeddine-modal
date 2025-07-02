import React from 'react'

type SimpleModalProps = {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

const SimpleModal = ({ isOpen, onClose, children }: SimpleModalProps) => {
    if (!isOpen) return null

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <button className="modal-close" onClick={onClose}>
                    x
                </button>
                {children}
            </div>
        </div>
    )
}

export default SimpleModal
