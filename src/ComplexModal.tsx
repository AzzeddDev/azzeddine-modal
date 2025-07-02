import React from 'react'

type ComplexModalProps = {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    closeButtonPosition?: 'inside' | 'outside'
}

const ComplexModal = ({
                          isOpen,
                          onClose,
                          children,
                          closeButtonPosition = 'inside',
                      }: ComplexModalProps) => {
    if (!isOpen) return null

    return (
        <div className="modal-overlay relative">
            {closeButtonPosition === 'outside' && (
                <button className="modal-close absolute top-2 right-2 z-10" onClick={onClose}>
                    x
                </button>
            )}
            <div className="modal-box relative">
                {closeButtonPosition === 'inside' && (
                    <button className="modal-close absolute top-2 right-2" onClick={onClose}>
                        x
                    </button>
                )}
                {children}
            </div>
        </div>
    )
}

export default ComplexModal