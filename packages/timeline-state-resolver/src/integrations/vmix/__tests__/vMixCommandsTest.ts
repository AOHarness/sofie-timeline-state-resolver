import { MappingVmixAudioBus, VMixCommand } from 'timeline-state-resolver-types'

export interface VMixStateCommandBase {
	command: VMixCommand
}

export interface VMixStateCommandActiveInput extends VMixStateCommandBase {
	command: VMixCommand.ACTIVE_INPUT
	input: number | string
	mix: number
}
export interface VMixStateCommandAddInput extends VMixStateCommandBase {
	command: VMixCommand.ADD_INPUT
	value: string
}

export interface VMixStateCommandAdjustCountdown extends VMixStateCommandBase {
	command: VMixCommand.ADJUST_COUNTDOWN
	input: number | string
	value: number
}
export interface VMixStateCommandAudio extends VMixStateCommandBase {
	command: VMixCommand.AUDIO_VOLUME
	input: number | string
	value: number
	fade?: number
}
export interface VMixStateCommandAudioAuto extends VMixStateCommandBase {
	command: VMixCommand.AUDIO_AUTO
	input: number | string
}
export interface VMixStateCommandAudioAutoOff extends VMixStateCommandBase {
	command: VMixCommand.AUDIO_AUTO_OFF
	input: number | string
}
export interface VMixStateCommandAudioAutoOn extends VMixStateCommandBase {
	command: VMixCommand.AUDIO_AUTO_ON
	input: number | string
}
export interface VMixStateCommandAudioBalance extends VMixStateCommandBase {
	command: VMixCommand.AUDIO_BALANCE
	input: number | string
	value: number
}
export interface VMixStateCommandAudioBus extends VMixStateCommandBase {
	command: VMixCommand.AUDIO_BUS
	input: number | string
	value: number
}
export interface VMixStateCommandAudioBusOff extends VMixStateCommandBase {
	command: VMixCommand.AUDIO_BUS_OFF
	input: number | string
	value: string
}
export interface VMixStateCommandAudioBusOn extends VMixStateCommandBase {
	command: VMixCommand.AUDIO_BUS_ON
	input: number | string
	value: string
}
export interface VMixStateCommandAudioChannelMatrixApplyPreset extends VMixStateCommandBase {
	command: VMixCommand.AUDIO_CHANNEL_MATRIX_APPLY_PRESET
	input: number | string
	value: number
}
export interface VMixStateCommandAudioMixerShowHide extends VMixStateCommandBase {
	command: VMixCommand.AUDIO_MIXER_SHOW_HIDE
}
export interface VMixStateCommandAudioOff extends VMixStateCommandBase {
	command: VMixCommand.AUDIO_OFF
	input: number | string
}
export interface VMixStateCommandBusAudioOn extends VMixStateCommandBase {
	command: VMixCommand.BUS_AUDIO_ON
	bus: MappingVmixAudioBus['index']
}
export interface VMixStateCommandAudioPluginOff extends VMixStateCommandBase {
	command: VMixCommand.AUDIO_PLUGIN_OFF
	input: number | string
	value: number
}
export interface VMixStateCommandAudioPluginOn extends VMixStateCommandBase {
	command: VMixCommand.AUDIO_PLUGIN_ON
	input: number | string
	value: number
}
export interface VMixStateCommandAudioPluginOnOff extends VMixStateCommandBase {
	command: VMixCommand.AUDIO_PLUGIN_ON_OFF
	input: number | string
	value: number
}
export interface VMixStateCommandAudioPluginShow extends VMixStateCommandBase {
	command: VMixCommand.AUDIO_PLUGIN_SHOW
	input: number | string
	value: number
}
export interface VMixStateCommandAutoPauseOff extends VMixStateCommandBase {
	command: VMixCommand.AUTO_PAUSE_OFF
	input: number | string
}
export interface VMixStateCommandAutoPauseOn extends VMixStateCommandBase {
	command: VMixCommand.AUTO_PAUSE_ON
	input: number | string
}
export interface VMixStateCommandAutoPlayFirst extends VMixStateCommandBase {
	command: VMixCommand.AUTO_PLAY_FIRST
	input: number | string
}
export interface VMixStateCommandAutoPlayFirstOff extends VMixStateCommandBase {
	command: VMixCommand.AUTO_PLAY_FIRST_OFF
	input: number | string
}
export interface VMixStateCommandAutoPlayFirstOn extends VMixStateCommandBase {
	command: VMixCommand.AUTO_PLAY_FIRST_ON
	input: number | string
}
export interface VMixStateCommandAutoPlayNext extends VMixStateCommandBase {
	command: VMixCommand.AUTO_PLAY_NEXT
	input: number | string
}
export interface VMixStateCommandAutoPlayNext extends VMixStateCommandBase {
	command: VMixCommand.AUTO_PLAY_NEXT
	input: number | string
}
export interface VMixStateCommandAutoPlayNextOff extends VMixStateCommandBase {
	command: VMixCommand.AUTO_PLAY_NEXT_OFF
	input: number | string
}
export interface VMixStateCommandAutoPlayNextOn extends VMixStateCommandBase {
	command: VMixCommand.AUTO_PLAY_NEXT_ON
	input: number | string
}
export interface VMixStateCommandAutoPlayOff extends VMixStateCommandBase {
	command: VMixCommand.AUTO_PLAY_NEXT_OFF
	input: number | string
}
export interface VMixStateCommandAutoPlayOn extends VMixStateCommandBase {
	command: VMixCommand.AUTO_PLAY_NEXT_ON
	input: number | string
}
export interface VMixStateCommandAutoRestartOff extends VMixStateCommandBase {
	command: VMixCommand.AUTO_RESTART_OFF
	input: number | string
}
export interface VMixStateCommandAutoRestartOn extends VMixStateCommandBase {
	command: VMixCommand.AUTO_RESTART_ON
	input: number | string
}
export interface VMixStateCommandBrowserBack extends VMixStateCommandBase {
	command: VMixCommand.BROWSER_BACK
	input: number | string
}
export interface VMixStateCommandBrowserForward extends VMixStateCommandBase {
	command: VMixCommand.BROWSER_FORWARD
	input: number | string
}
export interface VMixStateCommandBrowserKeyboardDisabled extends VMixStateCommandBase {
	command: VMixCommand.BROWSER_KEYBOARD_DISABLED
	input: number | string
}
export interface VMixStateCommandBrowserKeyboardEnabled extends VMixStateCommandBase {
	command: VMixCommand.BROWSER_KEYBOARD_ENABLED
	input: number | string
}
export interface VMixStateCommandBrowserMouseDisabled extends VMixStateCommandBase {
	command: VMixCommand.BROWSER_MOUSE_DISABLED
	input: number | string
}
export interface VMixStateCommandBrowserMouseEnabled extends VMixStateCommandBase {
	command: VMixCommand.BROWSER_MOUSE_ENABLED
	input: number | string
}
export interface VMixStateCommandBrowserNavigate extends VMixStateCommandBase {
	command: VMixCommand.BROWSER_NAVIGATE
	input: string | number
	value: string
}
export interface VMixStateCommandBrowserReload extends VMixStateCommandBase {
	command: VMixCommand.BROWSER_RELOAD
	input: number | string
}
export interface VMixStateCommandBusAAudio extends VMixStateCommandBase {
	command: VMixCommand.BUS_A_AUDIO
}
export interface VMixStateCommandBusAAudioOff extends VMixStateCommandBase {
	command: VMixCommand.BUS_A_AUDIO_OFF
}
export interface VMixStateCommandBusAAudioOn extends VMixStateCommandBase {
	command: VMixCommand.BUS_A_AUDIO_ON
}
export interface VMixStateCommandBusAAudioPluginOff extends VMixStateCommandBase {
	command: VMixCommand.BUS_A_AUDIO_PLUGIN_OFF
	value: number
}
export interface VMixStateCommandBusAAudioPluginOn extends VMixStateCommandBase {
	command: VMixCommand.BUS_A_AUDIO_PLUGIN_ON
	value: number
}
export interface VMixStateCommandBusAAudioPluginOnOff extends VMixStateCommandBase {
	command: VMixCommand.BUS_A_AUDIO_PLUGIN_ON_OFF
	value: number
}
export interface VMixStateCommandBusAAudioPluginShow extends VMixStateCommandBase {
	command: VMixCommand.BUS_A_AUDIO_PLUGIN_SHOW
	value: number
}
export interface VMixStateCommandBusAudioOff extends VMixStateCommandBase {
	command: VMixCommand.BUS_AUDIO_OFF
	bus: MappingVmixAudioBus['index']
}
export interface VMixStateCommandAudioOn extends VMixStateCommandBase {
	command: VMixCommand.AUDIO_ON
	input: number | string
}
export interface VMixStateCommandBusBAudio extends VMixStateCommandBase {
	command: VMixCommand.BUS_B_AUDIO
}
export interface VMixStateCommandBusBAudioOff extends VMixStateCommandBase {
	command: VMixCommand.BUS_B_AUDIO_OFF
}
export interface VMixStateCommandBusBAudioOn extends VMixStateCommandBase {
	command: VMixCommand.BUS_B_AUDIO_ON
}
export interface VMixStateCommandBusBAudioPluginOff extends VMixStateCommandBase {
	command: VMixCommand.BUS_B_AUDIO_PLUGIN_OFF
	value: number
}
export interface VMixStateCommandBusBAudioPluginOn extends VMixStateCommandBase {
	command: VMixCommand.BUS_B_AUDIO_PLUGIN_ON
	value: number
}
export interface VMixStateCommandBusBAudioPluginOnOff extends VMixStateCommandBase {
	command: VMixCommand.BUS_B_AUDIO_PLUGIN_ON_OFF
	value: number
}
export interface VMixStateCommandBusBAudioPluginShow extends VMixStateCommandBase {
	command: VMixCommand.BUS_B_AUDIO_PLUGIN_SHOW
	value: number
}
export interface VMixStateCommandBusVolume extends VMixStateCommandBase {
	command: VMixCommand.BUS_VOLUME
	bus: MappingVmixAudioBus['index']
	value: number
}
export interface VMixStateCommandBusXAudio extends VMixStateCommandBase {
	command: VMixCommand.BUS_X_AUDIO
	value: number
	bus: MappingVmixAudioBus['index']
}
export interface VMixStateCommandBusXAudioOff extends VMixStateCommandBase {
	command: VMixCommand.BUS_X_AUDIO_OFF
	bus: MappingVmixAudioBus['index']
}
export interface VMixStateCommandBusXAudioOn extends VMixStateCommandBase {
	command: VMixCommand.BUS_X_AUDIO_ON
	bus: MappingVmixAudioBus['index']
}
export interface VMixStateCommandBusXAudioPluginOff extends VMixStateCommandBase {
	command: VMixCommand.BUS_X_AUDIO_PLUGIN_OFF
	bus: MappingVmixAudioBus['index']
	value: number
}
export interface VMixStateCommandBusXAudioPluginOn extends VMixStateCommandBase {
	command: VMixCommand.BUS_X_AUDIO_PLUGIN_ON
	bus: MappingVmixAudioBus['index']
	value: number
}
export interface VMixStateCommandBusXAudioPluginOnOff extends VMixStateCommandBase {
	command: VMixCommand.BUS_X_AUDIO_PLUGIN_ON_OFF
	bus: MappingVmixAudioBus['index']
	value: number
}
export interface VMixStateCommandBusXAudioPluginShow extends VMixStateCommandBase {
	command: VMixCommand.BUS_X_AUDIO_PLUGIN_SHOW
	bus: MappingVmixAudioBus['index']
	value: number
}

export interface VMixStateCommandBusXSendToMaster extends VMixStateCommandBase {
	command: VMixCommand.BUS_X_SEND_TO_MASTER
	bus: MappingVmixAudioBus['index']
	value: number
}

export interface VMixStateCommandBusXSendToMasterOff extends VMixStateCommandBase {
	command: VMixCommand.BUS_X_SEND_TO_MASTER_OFF
	bus: MappingVmixAudioBus['index']
	value: number
}

export interface VMixStateCommandBusXSendToMasterOn extends VMixStateCommandBase {
	command: VMixCommand.BUS_X_SEND_TO_MASTER_ON
	bus: MappingVmixAudioBus['index']
	value: number
}

export interface VMixStateCommandBusXSolo extends VMixStateCommandBase {
	command: VMixCommand.BUS_X_SOLO
	bus: MappingVmixAudioBus['index']
	value: number
}

export interface VMixStateCommandBusXSoloOff extends VMixStateCommandBase {
	command: VMixCommand.BUS_X_SOLO_OFF
	bus: MappingVmixAudioBus['index']
	value: number
}

export interface VMixStateCommandBusXSoloOn extends VMixStateCommandBase {
	command: VMixCommand.BUS_X_SOLO_ON
	bus: MappingVmixAudioBus['index']
	value: number
}

export interface VMixStateCommandChangeCountdown extends VMixStateCommandBase {
	command: VMixCommand.CHANGE_COUNTDOWN
	input: number | string
	value: number 
}

export interface VMixStateCommandColourCorrectionAuto extends VMixStateCommandBase {
	command: VMixCommand.COLOUR_CORRECTION_AUTO
	input: number | string
}

export interface VMixStateCommandColourCorrectionReset extends VMixStateCommandBase {
	command: VMixCommand.COLOUR_CORRECTION_RESET
	input: number | string
}

export interface VMixStateCommandCreateVirtualInput extends VMixStateCommandBase {
	command: VMixCommand.CREATE_VIRTUAL_INPUT
	input: number | string
}

export interface VMixStateCommandCut extends VMixStateCommandBase {
	command: VMixCommand.CUT
	input: number | string
}

export interface VMixStateCommandCutDirect extends VMixStateCommandBase {
	command: VMixCommand.CUT_DIRECT
	input: number | string
}










export interface VMixStateCommandFader extends VMixStateCommandBase {
	command: VMixCommand.FADER
	value: number
}

export interface VMixStateCommandPreviewInput extends VMixStateCommandBase {
	command: VMixCommand.PREVIEW_INPUT
	input: number | string
	mix: number
}
export interface VMixStateCommandTransition extends VMixStateCommandBase {
	command: VMixCommand.TRANSITION
	input: number | string
	effect: string
	duration: number
	mix: number
}

export interface VMixStateCommandSetPanX extends VMixStateCommandBase {
	command: VMixCommand.SET_PAN_X
	input: number | string
	value: number
}
export interface VMixStateCommandSetPanY extends VMixStateCommandBase {
	command: VMixCommand.SET_PAN_Y
	input: number | string
	value: number
}
export interface VMixStateCommandSetZoom extends VMixStateCommandBase {
	command: VMixCommand.SET_ZOOM
	input: number | string
	value: number
}
export interface VMixStateCommandSetAlpha extends VMixStateCommandBase {
	command: VMixCommand.SET_ALPHA
	input: number | string
	value: number
}
export interface VMixStateCommandStartStreaming extends VMixStateCommandBase {
	command: VMixCommand.START_STREAMING
}
export interface VMixStateCommandStopStreaming extends VMixStateCommandBase {
	command: VMixCommand.STOP_STREAMING
}
export interface VMixStateCommandStartRecording extends VMixStateCommandBase {
	command: VMixCommand.START_RECORDING
}
export interface VMixStateCommandStopRecording extends VMixStateCommandBase {
	command: VMixCommand.STOP_RECORDING
}
export interface VMixStateCommandFadeToBlack extends VMixStateCommandBase {
	command: VMixCommand.FADE_TO_BLACK
}

export interface VMixStateCommandRemoveInput extends VMixStateCommandBase {
	command: VMixCommand.REMOVE_INPUT
	input: string
}
export interface VMixStateCommandPlayInput extends VMixStateCommandBase {
	command: VMixCommand.PLAY_INPUT
	input: number | string
}
export interface VMixStateCommandPauseInput extends VMixStateCommandBase {
	command: VMixCommand.PAUSE_INPUT
	input: number | string
}
export interface VMixStateCommandSetPosition extends VMixStateCommandBase {
	command: VMixCommand.SET_POSITION
	input: number | string
	value: number
}
export interface VMixStateCommandLoopOn extends VMixStateCommandBase {
	command: VMixCommand.LOOP_ON
	input: number | string
}
export interface VMixStateCommandLoopOff extends VMixStateCommandBase {
	command: VMixCommand.LOOP_OFF
	input: number | string
}
export interface VMixStateCommandSetInputName extends VMixStateCommandBase {
	command: VMixCommand.SET_INPUT_NAME
	input: number | string
	value: string
}
export interface VMixStateCommandSetOuput extends VMixStateCommandBase {
	command: VMixCommand.SET_OUPUT
	name: string
	value: string
	input?: number | string
}
export interface VMixStateCommandStartExternal extends VMixStateCommandBase {
	command: VMixCommand.START_EXTERNAL
}
export interface VMixStateCommandStopExternal extends VMixStateCommandBase {
	command: VMixCommand.STOP_EXTERNAL
}
export interface VMixStateCommandOverlayInputIn extends VMixStateCommandBase {
	command: VMixCommand.OVERLAY_INPUT_IN
	value: number
	input: string | number
}
export interface VMixStateCommandOverlayInputOut extends VMixStateCommandBase {
	command: VMixCommand.OVERLAY_INPUT_OUT
	value: number
}
export interface VMixStateCommandSetLayerInput extends VMixStateCommandBase {
	command: VMixCommand.SET_LAYER_INPUT
	input: string | number
	index: number
	value: string | number
}
export interface VMixStateCommandSetLayerZoom extends VMixStateCommandBase {
	command: VMixCommand.SET_LAYER_ZOOM
	input: string | number
	index: number
	value: number
}
export interface VMixStateCommandSetLayerPanX extends VMixStateCommandBase {
	command: VMixCommand.SET_LAYER_PAN_X
	input: string | number
	index: number
	value: number
}
export interface VMixStateCommandSetLayerPanY extends VMixStateCommandBase {
	command: VMixCommand.SET_LAYER_PAN_Y
	input: string | number
	index: number
	value: number
}
export interface VMixStateCommandSetLayerCrop extends VMixStateCommandBase {
	command: VMixCommand.SET_LAYER_CROP
	input: string | number
	index: number
	cropLeft: number
	cropTop: number
	cropRight: number
	cropBottom: number
}
export interface VMixStateCommandScriptStart extends VMixStateCommandBase {
	command: VMixCommand.SCRIPT_START
	value: string
}
export interface VMixStateCommandScriptStop extends VMixStateCommandBase {
	command: VMixCommand.SCRIPT_STOP
	value: string
}
export interface VMixStateCommandScriptStopAll extends VMixStateCommandBase {
	command: VMixCommand.SCRIPT_STOP_ALL
}
export interface VMixStateCommandListAdd extends VMixStateCommandBase {
	command: VMixCommand.LIST_ADD
	input: string | number
	value: string
}
export interface VMixStateCommandListRemoveAll extends VMixStateCommandBase {
	command: VMixCommand.LIST_REMOVE_ALL
	input: string | number
}
export interface VMixStateCommandRestart extends VMixStateCommandBase {
	command: VMixCommand.RESTART_INPUT
	input: string | number
}
export interface VMixStateCommandSetText extends VMixStateCommandBase {
	command: VMixCommand.SET_TEXT
	input: string | number
	fieldName: string
	value: string
}
export interface VMixStateCommanSelectIndex extends VMixStateCommandBase {
	command: VMixCommand.SELECT_INDEX
	input: string | number
	value: number
}
export interface VMixStateCommandSetImage extends VMixStateCommandBase {
	command: VMixCommand.SET_IMAGE
	input: string | number
	fieldName: string
	value: string
}
export type VMixStateCommand =

	| VMixStateCommandActiveInput
	| VMixStateCommandAddInput
	| VMixStateCommandAdjustCountdown
	| VMixStateCommandAudio
	| VMixStateCommandAudioAuto
	| VMixStateCommandAudioAutoOff
	| VMixStateCommandAudioAutoOn
	| VMixStateCommandAudioBalance
	| VMixStateCommandAudioBus
	| VMixStateCommandAudioBusOff
	| VMixStateCommandAudioBusOn
	| VMixStateCommandAudioChannelMatrixApplyPreset
	| VMixStateCommandAudioMixerShowHide
	| VMixStateCommandAudioOff
	| VMixStateCommandAudioOn
	| VMixStateCommandAudioPluginOff
	| VMixStateCommandAudioPluginOn
	| VMixStateCommandAudioPluginOnOff
	| VMixStateCommandAudioPluginShow
	| VMixStateCommandAutoPauseOff
	| VMixStateCommandAutoPauseOn
	| VMixStateCommandAutoPlayFirst
	| VMixStateCommandAutoPlayFirstOff
	| VMixStateCommandAutoPlayFirstOn
	| VMixStateCommandAutoPlayNext
	| VMixStateCommandAutoPlayNextOff
	| VMixStateCommandAutoPlayNextOn
	| VMixStateCommandAutoPlayOff
	| VMixStateCommandAutoPlayOn
	| VMixStateCommandAutoRestartOff
	| VMixStateCommandAutoRestartOn
	| VMixStateCommandBrowserBack
	| VMixStateCommandBrowserForward
	| VMixStateCommandBrowserKeyboardDisabled
	| VMixStateCommandBrowserKeyboardEnabled
	| VMixStateCommandBrowserMouseDisabled
	| VMixStateCommandBrowserMouseEnabled
	| VMixStateCommandBrowserNavigate
	| VMixStateCommandBrowserReload
	| VMixStateCommandBusAAudio
	| VMixStateCommandBusAAudioOff
	| VMixStateCommandBusAAudioOn
	| VMixStateCommandBusAAudioPluginOff
	| VMixStateCommandBusAAudioPluginOn
	| VMixStateCommandBusAAudioPluginOnOff
	| VMixStateCommandBusAAudioPluginShow
	| VMixStateCommandBusAudioOff
	| VMixStateCommandBusAudioOn
	| VMixStateCommandBusBAudio
	| VMixStateCommandBusBAudioOff
	| VMixStateCommandBusBAudioOn
	| VMixStateCommandBusBAudioPluginOff
	| VMixStateCommandBusBAudioPluginOn
	| VMixStateCommandBusBAudioPluginOnOff
	| VMixStateCommandBusBAudioPluginShow
	| VMixStateCommandBusVolume
	| VMixStateCommandBusXAudio
	| VMixStateCommandBusXAudioOff
	| VMixStateCommandBusXAudioOn
	| VMixStateCommandBusXAudioPluginOff
	| VMixStateCommandBusXAudioPluginOn
	| VMixStateCommandBusXAudioPluginOnOff
	| VMixStateCommandBusXAudioPluginShow
	| VMixStateCommandBusXSendToMaster
	| VMixStateCommandBusXSendToMasterOff
	| VMixStateCommandBusXSendToMasterOn
	| VMixStateCommandBusXSolo
	| VMixStateCommandBusXSoloOff
	| VMixStateCommandBusXSoloOn
	| VMixStateCommandChangeCountdown
	| VMixStateCommandColourCorrectionAuto
	| VMixStateCommandColourCorrectionReset
	| VMixStateCommandCreateVirtualInput
	| VMixStateCommandCut
	| VMixStateCommandCutDirect
	| VMixStateCommandDataSourceAutoNextOff
	| VMixStateCommandDataSourceAutoNextOn
	| VMixStateCommandDataSourceAutoNextOnOff
	| VMixStateCommandDataSourceNextRow
	| VMixStateCommandDataSourcePause
	| VMixStateCommandDataSourcePlay
	| VMixStateCommandDataSourcePlayPause
	| VMixStateCommandDataSourcePreviousRow
	| VMixStateCommandDataSourceSelectRow
	| VMixStateCommandDeinterlaceOff
	| VMixStateCommandDeinterlaceOn
	| VMixStateCommandEffect1
	| VMixStateCommandEffect1Off
	| VMixStateCommandEffect1On
	| VMixStateCommandEffect2
	| VMixStateCommandEffect2Off
	| VMixStateCommandEffect2On
	| VMixStateCommandEffect3
	| VMixStateCommandEffect3Off
	| VMixStateCommandEffect3On
	| VMixStateCommandEffect4
	| VMixStateCommandEffect4Off
	| VMixStateCommandEffect4On
	| VMixStateCommandFader
	| VMixStateCommandFadeToBlack
	| VMixStateCommandFullscreen
	| VMixStateCommandFullscreenOff
	| VMixStateCommandFullscreenOn
	| VMixStateCommandInput
	| VMixStateCommandInputPreviewHide
	| VMixStateCommandInputPreviewShow
	| VMixStateCommandInputPreviewShowHide
	| VMixStateCommandLastPreset
	| VMixStateCommandLayerOff
	| VMixStateCommandLayerOn
	| VMixStateCommandLayerOnOff
	| VMixStateCommandListAdd
	| VMixStateCommandListExport
	| VMixStateCommandListPlayOut
	| VMixStateCommandListRemove
	| VMixStateCommandListRemoveAll
	| VMixStateCommandListShowHide
	| VMixStateCommandListShuffle
	| VMixStateCommandLivePlayPause
	| VMixStateCommandLoop
	| VMixStateCommandLoopOff
	| VMixStateCommandLoopOn
	| VMixStateCommandMarkIn
	| VMixStateCommandMarkOut
	| VMixStateCommandMarkReset
	| VMixStateCommandMarkResetIn
	| VMixStateCommandMarkResetOut
	| VMixStateCommandMasterAudio
	| VMixStateCommandMasterAudioOff
	| VMixStateCommandMasterAudioOn
	| VMixStateCommandMasterAudioPluginOff
	| VMixStateCommandMasterAudioPluginOn
	| VMixStateCommandMasterAudioPluginOnOff
	| VMixStateCommandMasterAudioPluginShow
	| VMixStateCommandMirrorOff
	| VMixStateCommandMirrorOn
	| VMixStateCommandMoveInput
	| VMixStateCommandMoveLayer
	| VMixStateCommandMoveMultiViewOverlay
	| VMixStateCommandMultiViewOverlay
	| VMixStateCommandMultiViewOverlayOff
	| VMixStateCommandMultiViewOverlayOn
	| VMixStateCommandNDICommand
	| VMixStateCommandNDISelectSourceByIndex
	| VMixStateCommandNDISelectSourceByName
	| VMixStateCommandNDIStartRecording
	| VMixStateCommandNDIStopRecording
	| VMixStateCommandNextItem
	| VMixStateCommandNextPicture
	| VMixStateCommandNextPlayListEntry
	| VMixStateCommandNextTitlePreset
	| VMixStateCommandOpenPreset
	| VMixStateCommandOutput
	| VMixStateCommandOverlayInput1
	| VMixStateCommandOverlayInput1In
	| VMixStateCommandOverlayInput1Last
	| VMixStateCommandOverlayInput1Off
	| VMixStateCommandOverlayInput1Out
	| VMixStateCommandOverlayInput1Zoom
	| VMixStateCommandOverlayInput2
	| VMixStateCommandOverlayInput2In
	| VMixStateCommandOverlayInput2Last
	| VMixStateCommandOverlayInput2Off
	| VMixStateCommandOverlayInput2Out
	| VMixStateCommandOverlayInput2Zoom
	| VMixStateCommandOverlayInput3
	| VMixStateCommandOverlayInput3In
	| VMixStateCommandOverlayInput3Last
	| VMixStateCommandOverlayInput3Off
	| VMixStateCommandOverlayInput3Out
	| VMixStateCommandOverlayInput3Zoom
	| VMixStateCommandOverlayInput4
	| VMixStateCommandOverlayInput4In
	| VMixStateCommandOverlayInput4Last
	| VMixStateCommandOverlayInput4Off
	| VMixStateCommandOverlayInput4Out
	| VMixStateCommandOverlayInput4Zoom
	| VMixStateCommandOverlayInputAllOff
	| VMixStateCommandOverlayInputIn
	| VMixStateCommandOverlayInputOut
	| VMixStateCommandPause
	| VMixStateCommandPauseCountdown
	| VMixStateCommandPauseInput
	| VMixStateCommandPauseRender
	| VMixStateCommandPlayInput
	| VMixStateCommandPlayPause
	| VMixStateCommandPreviewInput 
	| VMixStateCommandPreviewInputNext
	| VMixStateCommandPreviewInputPrevious
	| VMixStateCommandPreviewOverlayInput1
	| VMixStateCommandPreviewOverlayInput2
	| VMixStateCommandPreviewOverlayInput3
	| VMixStateCommandPreviewOverlayInput4
	| VMixStateCommandPreviousItem
	| VMixStateCommandPreviousPicture
	| VMixStateCommandPreviousPlayListEntry
	| VMixStateCommandPreviousTitlePreset
	| VMixStateCommandPTZCreateVirtualInput
	| VMixStateCommandPTZFocusAuto
	| VMixStateCommandPTZFocusFar
	| VMixStateCommandPTZFocusManual
	| VMixStateCommandPTZFocusNear
	| VMixStateCommandPTZFocusStop
	| VMixStateCommandPTZHome
	| VMixStateCommandPTZMoveDown
	| VMixStateCommandPTZMoveDownLeft
	| VMixStateCommandPTZMoveDownRight
	| VMixStateCommandPTZMoveLeft
	| VMixStateCommandPTZMoveRight
	| VMixStateCommandPTZMoveStop
	| VMixStateCommandPTZMoveToVirtualInputPosition
	| VMixStateCommandPTZMoveToVirtualInputPositionByIndex
	| VMixStateCommandPTZMoveUp
	| VMixStateCommandPTZMoveUpLeft
	| VMixStateCommandPTZMoveUpRight
	| VMixStateCommandPTZUpdateVirtualInput
	| VMixStateCommandPTZZoomIn
	| VMixStateCommandPTZZoomOut
	| VMixStateCommandPTZZoomStop
	| VMixStateCommandQuickPlay
	| VMixStateCommandRemoveInput
	| VMixStateCommandResetInput
	| VMixStateCommandRestart
	| VMixStateCommandResumeRender
	| VMixStateCommandSavePreset
	| VMixStateCommandSaveVideoDelay
	| VMixStateCommandScriptStart
	| VMixStateCommandScriptStartDynamic
	| VMixStateCommandScriptStop
	| VMixStateCommandScriptStopAll
	| VMixStateCommandScriptStopDynamic
	| VMixStateCommandSelectCategory
	| VMixStateCommandSelectPlayList
	| VMixStateCommandSelectTitlePreset
	| VMixStateCommandSetAlpha
	| VMixStateCommandSetBalance
	| VMixStateCommandSetBusAVolume
	| VMixStateCommandSetBusAVolumeFade
	| VMixStateCommandSetBusBVolume
	| VMixStateCommandSetBusBVolumeFade
	| VMixStateCommandSetBusCVolume
	| VMixStateCommandSetBusCVolumeFade
	| VMixStateCommandSetBusDVolume
	| VMixStateCommandSetBusDVolumeFade
	| VMixStateCommandSetBusEVolume
	| VMixStateCommandSetBusEVolumeFade
	| VMixStateCommandSetBusFVolume
	| VMixStateCommandSetBusFVolumeFade
	| VMixStateCommandSetBusGVolume
	| VMixStateCommandSetBusGVolumeFade
	| VMixStateCommandSetCCGainB
	| VMixStateCommandSetCCGainG
	| VMixStateCommandSetCCGainR
	| VMixStateCommandSetCCGainRGB
	| VMixStateCommandSetCCGainY
	| VMixStateCommandSetCCGammaB
	| VMixStateCommandSetCCGammaG
	| VMixStateCommandSetCCGammaR
	| VMixStateCommandSetCCGammaRGB
	| VMixStateCommandSetCCGammaY
	| VMixStateCommandSetCCHue
	| VMixStateCommandSetCCLiftB
	| VMixStateCommandSetCCLiftG
	| VMixStateCommandSetCCLiftR
	| VMixStateCommandSetCCLiftRGB
	| VMixStateCommandSetCCLiftY
	| VMixStateCommandSetCCSaturation
	| VMixStateCommandSetColor
	| VMixStateCommandSetCountdown
	| VMixStateCommandSetCrop
	| VMixStateCommandSetCropX1
	| VMixStateCommandSetCropX2
	| VMixStateCommandSetCropY1
	| VMixStateCommandSetCropY2
	| VMixStateCommandSetDynamicInput1
	| VMixStateCommandSetDynamicInput2
	| VMixStateCommandSetDynamicInput3
	| VMixStateCommandSetDynamicInput4
	| VMixStateCommandSetEffect1Strength
	| VMixStateCommandSetEffect2Strength
	| VMixStateCommandSetEffect3Strength
	| VMixStateCommandSetEffect4Strength
	| VMixStateCommandSetFader
	| VMixStateCommandSetFrameDelay
	| VMixStateCommandSetGain
	| VMixStateCommandSetGainChannel1
	| VMixStateCommandSetGainChannel2
	| VMixStateCommandSetHeadphonesVolume
	| VMixStateCommandSetImage
	| VMixStateCommandSetImageVisible
	| VMixStateCommandSetImageVisibleOff
	| VMixStateCommandSetImageVisibleOn
	| VMixStateCommandSetInputName
	| VMixStateCommandSetLayer
	| VMixStateCommandSetLayer10Crop
	| VMixStateCommandSetLayer10CropX1
	| VMixStateCommandSetLayer10CropX2
	| VMixStateCommandSetLayer10CropY1
	| VMixStateCommandSetLayer10CropY2
	| VMixStateCommandSetLayer10Height
	| VMixStateCommandSetLayer10PanX
	| VMixStateCommandSetLayer10PanY
	| VMixStateCommandSetLayer10Rectangle
	| VMixStateCommandSetLayer10Width
	| VMixStateCommandSetLayer10X
	| VMixStateCommandSetLayer10Y
	| VMixStateCommandSetLayer10Zoom
	| VMixStateCommandSetLayer1Crop
	| VMixStateCommandSetLayer1CropX1
	| VMixStateCommandSetLayer1CropX2
	| VMixStateCommandSetLayer1CropY1
	| VMixStateCommandSetLayer1CropY2
	| VMixStateCommandSetLayer1Height
	| VMixStateCommandSetLayer1PanX
	| VMixStateCommandSetLayer1PanY
	| VMixStateCommandSetLayer1Rectangle
	| VMixStateCommandSetLayer1Width
	| VMixStateCommandSetLayer1X
	| VMixStateCommandSetLayer1Y
	| VMixStateCommandSetLayer1Zoom
	| VMixStateCommandSetLayer2Crop
	| VMixStateCommandSetLayer2CropX1
	| VMixStateCommandSetLayer2CropX2
	| VMixStateCommandSetLayer2CropY1
	| VMixStateCommandSetLayer2CropY2
	| VMixStateCommandSetLayer2Height
	| VMixStateCommandSetLayer2PanX
	| VMixStateCommandSetLayer2PanY
	| VMixStateCommandSetLayer2Rectangle
	| VMixStateCommandSetLayer2Width
	| VMixStateCommandSetLayer2X
	| VMixStateCommandSetLayer2Y
	| VMixStateCommandSetLayer2Zoom
	| VMixStateCommandSetLayer3Crop
	| VMixStateCommandSetLayer3CropX1
	| VMixStateCommandSetLayer3CropX2
	| VMixStateCommandSetLayer3CropY1
	| VMixStateCommandSetLayer3CropY2
	| VMixStateCommandSetLayer3Height
	| VMixStateCommandSetLayer3PanX
	| VMixStateCommandSetLayer3PanY
	| VMixStateCommandSetLayer3Rectangle
	| VMixStateCommandSetLayer3Width
	| VMixStateCommandSetLayer3X
	| VMixStateCommandSetLayer3Y
	| VMixStateCommandSetLayer3Zoom
	| VMixStateCommandSetLayer4Crop
	| VMixStateCommandSetLayer4CropX1
	| VMixStateCommandSetLayer4CropX2
	| VMixStateCommandSetLayer4CropY1
	| VMixStateCommandSetLayer4CropY2
	| VMixStateCommandSetLayer4Height
	| VMixStateCommandSetLayer4PanX
	| VMixStateCommandSetLayer4PanY
	| VMixStateCommandSetLayer4Rectangle
	| VMixStateCommandSetLayer4Width
	| VMixStateCommandSetLayer4X
	| VMixStateCommandSetLayer4Y
	| VMixStateCommandSetLayer4Zoom
	| VMixStateCommandSetLayer5Crop
	| VMixStateCommandSetLayer5CropX1
	| VMixStateCommandSetLayer5CropX2
	| VMixStateCommandSetLayer5CropY1
	| VMixStateCommandSetLayer5CropY2
	| VMixStateCommandSetLayer5Height
	| VMixStateCommandSetLayer5PanX
	| VMixStateCommandSetLayer5PanY
	| VMixStateCommandSetLayer5Rectangle
	| VMixStateCommandSetLayer5Width
	| VMixStateCommandSetLayer5X
	| VMixStateCommandSetLayer5Y
	| VMixStateCommandSetLayer5Zoom
	| VMixStateCommandSetLayer6Crop
	| VMixStateCommandSetLayer6CropX1
	| VMixStateCommandSetLayer6CropX2
	| VMixStateCommandSetLayer6CropY1
	| VMixStateCommandSetLayer6CropY2
	| VMixStateCommandSetLayer6Height
	| VMixStateCommandSetLayer6PanX
	| VMixStateCommandSetLayer6PanY
	| VMixStateCommandSetLayer6Rectangle
	| VMixStateCommandSetLayer6Width
	| VMixStateCommandSetLayer6X
	| VMixStateCommandSetLayer6Y
	| VMixStateCommandSetLayer6Zoom
	| VMixStateCommandSetLayer7Crop
	| VMixStateCommandSetLayer7CropX1
	| VMixStateCommandSetLayer7CropX2
	| VMixStateCommandSetLayer7CropY1
	| VMixStateCommandSetLayer7CropY2
	| VMixStateCommandSetLayer7Height
	| VMixStateCommandSetLayer7PanX
	| VMixStateCommandSetLayer7PanY
	| VMixStateCommandSetLayer7Rectangle
	| VMixStateCommandSetLayer7Width
	| VMixStateCommandSetLayer7X
	| VMixStateCommandSetLayer7Y
	| VMixStateCommandSetLayer7Zoom
	| VMixStateCommandSetLayer8Crop
	| VMixStateCommandSetLayer8CropX1
	| VMixStateCommandSetLayer8CropX2
	| VMixStateCommandSetLayer8CropY1
	| VMixStateCommandSetLayer8CropY2
	| VMixStateCommandSetLayer8Height
	| VMixStateCommandSetLayer8PanX
	| VMixStateCommandSetLayer8PanY
	| VMixStateCommandSetLayer8Rectangle
	| VMixStateCommandSetLayer8Width
	| VMixStateCommandSetLayer8X
	| VMixStateCommandSetLayer8Y
	| VMixStateCommandSetLayer8Zoom
	| VMixStateCommandSetLayer9Crop
	| VMixStateCommandSetLayer9CropX1
	| VMixStateCommandSetLayer9CropX2
	| VMixStateCommandSetLayer9CropY1
	| VMixStateCommandSetLayer9CropY2
	| VMixStateCommandSetLayer9Height
	| VMixStateCommandSetLayer9PanX
	| VMixStateCommandSetLayer9PanY
	| VMixStateCommandSetLayer9Rectangle
	| VMixStateCommandSetLayer9Width
	| VMixStateCommandSetLayer9X
	| VMixStateCommandSetLayer9Y
	| VMixStateCommandSetLayer9Zoom
	| VMixStateCommandSetLayerAnimated
	| VMixStateCommandSetLayerCrop
	| VMixStateCommandSetLayerDynamicCrop
	| VMixStateCommandSetLayerDynamicCropX1
	| VMixStateCommandSetLayerDynamicCropX2
	| VMixStateCommandSetLayerDynamicCropY1
	| VMixStateCommandSetLayerDynamicCropY2
	| VMixStateCommandSetLayerDynamicHeight
	| VMixStateCommandSetLayerDynamicPanX
	| VMixStateCommandSetLayerDynamicPanY
	| VMixStateCommandSetLayerDynamicRectangle
	| VMixStateCommandSetLayerDynamicWidth
	| VMixStateCommandSetLayerDynamicX
	| VMixStateCommandSetLayerDynamicY
	| VMixStateCommandSetLayerDynamicZoom
	| VMixStateCommandSetLayerInput
	| VMixStateCommandSetLayerPanX
	| VMixStateCommandSetLayerPanY
	| VMixStateCommandSetLayerZoom
	| VMixStateCommandSetMasterVolume
	| VMixStateCommandSetMasterVolumeFade
	| VMixStateCommandSetMultiViewOverlay
	| VMixStateCommandSetOuput
	| VMixStateCommandSetOutput2
	| VMixStateCommandSetOutput3
	| VMixStateCommandSetOutput4
	| VMixStateCommandSetOutputExternal2
	| VMixStateCommandSetOutputFullscreen
	| VMixStateCommandSetOutputFullscreen2
	| VMixStateCommandSetPanX
	| VMixStateCommandSetPanY
	| VMixStateCommandSetPictureEffect
	| VMixStateCommandSetPictureEffectDuration
	| VMixStateCommandSetPictureTransition
	| VMixStateCommandSetPosition
	| VMixStateCommandSetRate
	| VMixStateCommandSetRateSlowMotion
	| VMixStateCommandSetStingerGTInput1
	| VMixStateCommandSetStingerGTInput2
	| VMixStateCommandSetStingerGTInput3
	| VMixStateCommandSetStingerGTInput4
	| VMixStateCommandSetText
	| VMixStateCommandSetTextColour
	| VMixStateCommandSetTextVisible
	| VMixStateCommandSetTextVisibleOff
	| VMixStateCommandSetTextVisibleOn
	| VMixStateCommandSetTickerSpeed
	| VMixStateCommandSetTransitionDuration1
	| VMixStateCommandSetTransitionDuration2
	| VMixStateCommandSetTransitionDuration3
	| VMixStateCommandSetTransitionDuration4
	| VMixStateCommandSetTransitionEffect1
	| VMixStateCommandSetTransitionEffect2
	| VMixStateCommandSetTransitionEffect3
	| VMixStateCommandSetTransitionEffect4
	| VMixStateCommandSetVolume
	| VMixStateCommandSetVolumeBusMixer
	| VMixStateCommandSetVolumeBusMixerA
	| VMixStateCommandSetVolumeBusMixerB
	| VMixStateCommandSetVolumeBusMixerC
	| VMixStateCommandSetVolumeBusMixerD
	| VMixStateCommandSetVolumeBusMixerE
	| VMixStateCommandSetVolumeBusMixerF
	| VMixStateCommandSetVolumeBusMixerG
	| VMixStateCommandSetVolumeBusMixerM
	| VMixStateCommandSetVolumeChannel1
	| VMixStateCommandSetVolumeChannel2
	| VMixStateCommandSetVolumeChannelMixer
	| VMixStateCommandSetVolumeChannelMixer1
	| VMixStateCommandSetVolumeChannelMixer10
	| VMixStateCommandSetVolumeChannelMixer11
	| VMixStateCommandSetVolumeChannelMixer12
	| VMixStateCommandSetVolumeChannelMixer13
	| VMixStateCommandSetVolumeChannelMixer14
	| VMixStateCommandSetVolumeChannelMixer15
	| VMixStateCommandSetVolumeChannelMixer16
	| VMixStateCommandSetVolumeChannelMixer2
	| VMixStateCommandSetVolumeChannelMixer3
	| VMixStateCommandSetVolumeChannelMixer4
	| VMixStateCommandSetVolumeChannelMixer5
	| VMixStateCommandSetVolumeChannelMixer6
	| VMixStateCommandSetVolumeChannelMixer7
	| VMixStateCommandSetVolumeChannelMixer8
	| VMixStateCommandSetVolumeChannelMixer9
	| VMixStateCommandSetVolumeFade
	| VMixStateCommandSetZoom
	| VMixStateCommandSharpenOff
	| VMixStateCommandSharpenOn
	| VMixStateCommandSnapshot
	| VMixStateCommandSnapshotInput
	| VMixStateCommandSolo
	| VMixStateCommandSoloAllOff
	| VMixStateCommandSoloOff
	| VMixStateCommandSoloOn
	| VMixStateCommandSoloPFL
	| VMixStateCommandSoloPFLOff
	| VMixStateCommandSoloPFLOn
	| VMixStateCommandStartCountdown
	| VMixStateCommandStartExternal
	| VMixStateCommandStartMultiCorder
	| VMixStateCommandStartPlayList
	| VMixStateCommandStartRecording
	| VMixStateCommandStartSRTOutput
	| VMixStateCommandStartStopExternal
	| VMixStateCommandStartStopMultiCorder
	| VMixStateCommandStartStopRecording
	| VMixStateCommandStartStopSRTOutput
	| VMixStateCommandStartStopStreaming
	| VMixStateCommandStartStreaming
	| VMixStateCommandStinger1
	| VMixStateCommandStinger2
	| VMixStateCommandStinger3
	| VMixStateCommandStinger4
	| VMixStateCommandStopCountdown
	| VMixStateCommandStopExternal
	| VMixStateCommandStopMultiCorder
	| VMixStateCommandStopPlayList
	| VMixStateCommandStopRecording
	| VMixStateCommandStopSRTOutput
	| VMixStateCommandStopStreaming
	| VMixStateCommandStreamingSetKey
	| VMixStateCommandStreamingSetPassword
	| VMixStateCommandStreamingSetURL
	| VMixStateCommandStreamingSetUsername
	| VMixStateCommandSuspendCountdown
	| VMixStateCommandSwapLayerAnimated
	| VMixStateCommandTitleBeginAnimation
	| VMixStateCommandTransition
	| VMixStateCommandTransition1
	| VMixStateCommandTransition2
	| VMixStateCommandTransition3
	| VMixStateCommandTransition4
	| VMixStateCommandVideoCallAudioSource
	| VMixStateCommandVideoCallConnect
	| VMixStateCommandVideoCallReconnect
	| VMixStateCommandVideoCallVideoSource
	| VMixStateCommandVideoDelayStartRecording
	| VMixStateCommandVideoDelayStartStopRecording
	| VMixStateCommandVideoDelayStopRecording
	| VMixStateCommandWaitForCompletion
	| VMixStateCommandWriteDurationToRecordingLog
	| VMixStateCommandZoomJoinMeeting
	| VMixStateCommandZoomMuteSelf
	| VMixStateCommandZoomSelectParticipantByName
	| VMixStateCommandZoomUnMuteSelf
	| VMixStateCommanSelectIndex


	

export enum CommandContext {
	None = 'none',
	Retry = 'retry',
}
export interface VMixStateCommandWithContext {
	command: VMixStateCommand
	context: CommandContext
	timelineId: string
}
