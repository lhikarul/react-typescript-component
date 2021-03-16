import React from 'react'
import classNames from 'classnames'

export enum AlertType {
  Success = 'success',
  Default = 'default',
  Danger = 'danger',
  Warning = 'warning'
}

interface AlertProps {
  title: string,
  description: string;
  className?: string;
  alertType?: AlertType;
  closable?: boolean
}

const Alert: React.FC<AlertProps> = (props) => {
  const {className, alertType, title, description, closable} = props

  const classes = classNames('alert', className, {
    [`alert-${alertType}`] : alertType
  })

  const titleClass = classNames('alert-title')

  const handleClose = () => {
    console.log('close');
  }

  return (
    <div className={classes}>
      <span className={titleClass}>{title}</span>
      <p className='alert-desc'>{description}</p> 
      {closable && (
        <span className="alert-close" onClick={handleClose}>x</span>
      )}
    </div>
  )
}

Alert.defaultProps = {
  alertType: AlertType.Default,
  closable: true
}

export default Alert