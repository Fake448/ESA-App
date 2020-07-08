VERSION 1.0 CLASS
BEGIN
  MultiUse = -1  'True
END
Attribute VB_Name = "cls_Artikel"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = False
Attribute VB_Exposed = False
Option Explicit

' These are properties
Public pArtikelnummer_Procos As String
Public pArtikelnummer_AP As String
Public pBenennung As String
Public pSystem As String
Public pTyp As String
Public pTypBezeichnung As String
Public pKlasse As String
Public pLochbild As String
Public pSpannung As String
Public pStrom As String
Public pPole As String
Public pSchutzgrad As String
Public pMerkmal As String


' GETTER / SETTER
' ==========================================
Public Property Let Artikelnummer_Procos(str As String)
    pArtikelnummer_Procos = Artikelnummer_Procos
End Property
Public Property Get Artikelnummer_Procos() As String
    Artikelnummer_Procos = pArtikelnummer_Procos
End Property

' Functions
' ==========================================
Sub DebugArtikel()
    Debug.Print "Artikelnummer_Procos: " & pArtikelnummer_Procos
    Debug.Print "Artikelnummer_AP: " & pArtikelnummer_AP
    Debug.Print "Benennung: " & pBenennung
    Debug.Print "System: " & pSystem
    Debug.Print "TypBezeichnung: " & pTypBezeichnung
    Debug.Print "Klasse: " & pKlasse
End Sub

Sub Kalkuliere()
' Code for Kalkulieren Goes Here
MsgBox "Kalkulieren"
End Sub


