/*
	Key:	JSTOOLS
	Service:JavaScript Tools
	Part:	Fonction recurentes
	Version:Dcinet V2
*/

/*
 * retourne un message d'erreur
 */
function msgErreur(message,ele)
{
  if ( ele != null ) ele.focus();
  alert(message);
  return false;
}

/*
 * Set l'option de la combo
 */
function setselect(ele,val)
{
  for ( var i = 0 ; i < ele.length ; i++ )
  {
	if ( ele.options[i].value == val )
	{
	  if ( ele.selectedIndex != i )
		ele.selectedIndex = i;
	  return;
	}
  }
  selectedIndex = -1;
}

/*
 * Retourne la valeur de l'option de la combo selectionnée
 */
function getselect( ele )
{
  if ( ele.selectedIndex == -1 )
	return "";
  else
	return ele.options[ele.selectedIndex].value;
}

/*
 * Selection d'un bouton radio par sa valeur
 */
function setradio(ele,val)
{
  for ( var i = 0; i < ele.length; i++ )
  {
	if ( ele[i].value == val )
	{
	  ele[i].click();
	  return;
	}
  }
}

/*
 * Recuperation de la valeur du bouton radio selectionné
 */
function getradio(ele, defaut)
{
  if(ele.length)
  {
	for ( var i = 0; i < ele.length; i++ )
	{
	  if ( ele[i].checked )
		return ele[i].value;
	}
  }
  else
  {
	return ele.value;
  }
  return defaut;
}


/*
 * Permet de controler que des caracteres indesirables ne sont pas dans la zone
 */
function CheckForbiddenChar( ele, regex, message )
{
  var str= ele.value;
  var tab=str.match(regex);
  if ( tab!=null && tab.length > 0 )  {
    ele.focus();
    
    //
    var n="";
    for (var i = 0; i < tab.length; i++) {
      n+=" "+tab[i];
    }
    //
    message = message.replace("%1", n );
    alert(message);
    
    return false;
  }
  return true;
}

function CheckForbiddenCharOld( ele, regex, message )
{
  var str= ele.value;
  var index = str.search(regex);
  if ( index >= 0 )
  {
    ele.focus();
    message = message.replace("%1", str.charAt(index) );
    alert(message);
    return false;
  }
  return true;
}

/*
 * ZeroDevant(zone, longueur )
 * complette une chaine de caratere avec des zeros devant.
*/
function ZeroDevant(zone,longueur)
{
  var ele = 0;
  var zero= "";

  for ( i = 1 ; i <= longueur; i++ )
	zero = zero + "0";

  ele = zero + zone.value ;
  zone.value = ele.substr(ele.length - longueur , longueur );
}

/*
 * CheckRIBAlert( CBanque,CGuichet,CNumCompte,CleRIB)
 * Controle la clé RIB et envoi un message d'erreur et redonne le focus sur la zone
 */
function CheckRIBAlert(CBanque,CGuichet,CNumCompte,CleRIB)
{
  var str;

  if ( CBanque.value == "" )
  {
	alert("La saisie du code banque est obligatoire.");
	CBanque.focus();
	return false;
  }

  if ( CGuichet.value == "" )
  {
	alert("La saisie du code guichet est obligatoire.");
	CGuichet.focus();
	return false ;
  }

  if ( CNumCompte.value == "" )
  {
	alert("La saisie du numéro de compte est obligatoire");
	CNumCompte.focus();
	return false;
  }

  if ( CleRIB.value == "" )
  {
	alert("La saisie de la clé RIB est obligatoire.");
	CleRIB.focus();
	return false;
  }

  str = CheckRIB( CBanque.value,CGuichet.value,CNumCompte.value,CleRIB.value);
  if ( str != "" )
  {
	alert( str );
	CBanque.focus();
	return false;
  }
  else
	return true;
}

/*
 * CheckRIB(CBanque,CGuichet,CNumCompte,CleRIB)
 * Controle la clé RIB
 */
function CheckRIB(CBanque,CGuichet,CNumCompte,CleRIB)
{
  var PN1 =0;
  var PN2 =0;
  var PN3 =0;
  var PN4 =0;
  var x   =0;

  PN1=CBanque *1; // Forcer la variable en Numerique
  PN2=CGuichet*1;
  PN3= PN1*100000 + PN2;
  PN3= PN3 % 97 ;
  PN3=PN3 * 10000000;
  PN3=PN3 % 97;
  PN3=( PN3 * 1000000 ) + 96;
  PN3=PN3 % 97 ;

  CNumCompte = CNumCompte.replace(new RegExp("A","g"),"1");
  CNumCompte = CNumCompte.replace(new RegExp("J","g"),"1");

  CNumCompte = CNumCompte.replace(new RegExp("B","g"),"2");
  CNumCompte = CNumCompte.replace(new RegExp("K","g"),"2");
  CNumCompte = CNumCompte.replace(new RegExp("S","g"),"2");

  CNumCompte = CNumCompte.replace(new RegExp("C","g"),"3");
  CNumCompte = CNumCompte.replace(new RegExp("L","g"),"3");
  CNumCompte = CNumCompte.replace(new RegExp("T","g"),"3");

  CNumCompte = CNumCompte.replace(new RegExp("D","g"),"4");
  CNumCompte = CNumCompte.replace(new RegExp("M","g"),"4");
  CNumCompte = CNumCompte.replace(new RegExp("U","g"),"4");

  CNumCompte = CNumCompte.replace(new RegExp("E","g"),"5");
  CNumCompte = CNumCompte.replace(new RegExp("N","g"),"5");
  CNumCompte = CNumCompte.replace(new RegExp("V","g"),"5");

  CNumCompte = CNumCompte.replace(new RegExp("F","g"),"6");
  CNumCompte = CNumCompte.replace(new RegExp("O","g"),"6");
  CNumCompte = CNumCompte.replace(new RegExp("W","g"),"6");

  CNumCompte = CNumCompte.replace(new RegExp("G","g"),"7");
  CNumCompte = CNumCompte.replace(new RegExp("P","g"),"7");
  CNumCompte = CNumCompte.replace(new RegExp("X","g"),"7");

  CNumCompte = CNumCompte.replace(new RegExp("H","g"),"8");
  CNumCompte = CNumCompte.replace(new RegExp("Q","g"),"8");
  CNumCompte = CNumCompte.replace(new RegExp("Y","g"),"8");

  CNumCompte = CNumCompte.replace(new RegExp("I","g"),"9");
  CNumCompte = CNumCompte.replace(new RegExp("R","g"),"9");
  CNumCompte = CNumCompte.replace(new RegExp("Z","g"),"9");
  PN4 = CNumCompte;
  PN4 = PN4 %  97;
  PN4 = PN4 * 100;
  PN3 = PN3 + ( PN4 % 97 );
  PN3 = PN3 % 97;
  if ( PN3==96 )
	PN3=-1;     //  RIB=97 et non 00
  x = 100 + ( 96 - PN3 );
  x = x +"";                  // Forcer la variable en String
  if (x.substr(x.length - 2,2) != CleRIB )
	return " Votre numéro de compte est incorrect par rapport au calcul de la clé RIB. ";
  else
	return "";
}

/*
 * CheckAFB(str)
 * Controle si la chaine de caractere est acceptée en AFB et envoi un message d'erreur et redonne le focus sur la zone
 */
function CheckAFB(str)
{
  var caractere;
  var lstAFB = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ \"-./)(";
  var message = "Les caractères suivants :\n %1\n ne sont pas autorisés dans cette zone";
  var n = "";
  
  for(i = 0; i < str.length; i++)
  {
    caractere = str.substr(i, 1);
    
    if (lstAFB.search(str.substr(i, 1)) == -1) {
      n += " " + caractere;
    }
  }
  
  if (n != "") return message.replace("%1", n) ;
  
  return "";
}

/*
 * CheckAFBAlert(ele)
 * Controle si la chaine de caractere est acceptée en AFB
 */
function CheckAFBAlert(zone)
{
  var str;
  str = CheckAFB( zone.value);
  if ( str != "" )
  {
    alert( str );
    zone.focus();
    return false;
  }
  else
    return true;
}


function ReadAmount( strAmount )
{
var arr, dec, val, sep;

  dec = val = "";
  arr = strAmount.split(",");
  if ( arr.length == 2 )
	  dec = arr[1];
  sep = "";
  if ( sep == "" ) sep = " ";
  arr = arr[0].split(sep);
  for ( i = 0; i < arr.length; i++ )
	  val += arr[i];
  return parseFloat( val + "." + dec );
}

/*
 * CheckAmount( ele, strMax, obl, strDev )
 */
function CheckAmount( ele, strMax, obl, strDev )
{
  var arr,mil,nb,sep,hlp;
  hlp ="Le format du montant est le suivant :\n- Le séparateur des milliers est un espace\n- Le séparateur des décimales est ','\n\nL'erreur suivante a été trouvée\n";
  if ( strDev == null ) strDev = "";
  if ( ele.value == 0 )
  {
	if ( obl )
	  return "Le montant ne doit pas être nul";
	else
	  return "";
  }
  // Verifie que d'autre caracteres non mumerique que les separateurs ne sont pas present
  // C'est pour eviter les saisie du style 5.00
  for( i=0; i<ele.value.length ; i++ )
  {
    if(isNaN(ele.value.charAt(i)))
    {
      if(ele.value.charAt(i)!="," && ele.value.charAt(i)!="")
      {
        if(i==0)
        {
          if(ele.value.charAt(i)!="-" && ele.value.charAt(i)!="+" )
            return hlp+"Format non numérique" + "\n\n( " + ele.value + " )";
        }
        else
          return hlp+"Format non numérique" + "\n\n( " + ele.value + " )";
      }
    }
  }
  
  // Decimales
  arr = ele.value.split(",");
  if ( arr.length > 2 )
	return hlp+"Séparateur décimal incorrect" + "\n\n( " + ele.value + " )";
  if ( arr.length == 2 )
  {
	nb = strDev.substring(3,4);
	if ( nb != "" )
	{
	  if ( nb == 0 ) return "Devise sans décimale";
	  if ( arr[1].length > nb ) return "Nombre de décimales incorrect";
	}
	if ( parseInt(arr[1], 10) != arr[1] ) return hlp+"Format non numérique" + "\n\n( " + ele.value + " )";
  }

  //Controle sur le nombre de digit contenu dans les decimales et la partie entiere
  if( parseInt(arr[0], 10)>9999999999999)
    return "La partie entiere du montant ne doit pas etre superieur à 9999999999999";
  if( parseInt(arr[1], 10)>999)
    return "La partie decimale du montant ne doit pas etre superieur à 999";

  // Separateur Milliers
  sep = "";
  if ( sep == "" ) sep = " ";
  mil = arr[0].split(sep);
  if ( mil.length > 1)
  {
	for ( i = 0; i < mil.length; i++ )
	{
	  if ( ( i > 0 && mil[i].length != 3 ) || ( i== 0 && mil[i].length > 3  && mil[i].substring(0,1)!="-" && mil[i].substring(0,1)!="+"  ) ) return hlp+"Séparateur des milliers incorrect\n\n( "+ ele.value + " )";
	  if (mil[i]!="-" && mil[i]!="+" && parseInt(mil[i], 10) != mil[i] ) return hlp+"Format non numérique" + "\n\n( " + ele.value + " )";
	}
  }
  else
	  if ( parseInt(mil[0], 10) != mil[0] ) return hlp+"Format non numérique" + "\n\n( " + ele.value + " )";

  // Gestion des bornes
  if ( strMax != "" )
  {
	var fval = ReadAmount( ele.value ), min, max = parseInt( strMax, 10 );

	if ( max == 0 )
	{
	  if ( fval < 0 )
		return "Le montant ne peut pas être négatif\n\n( " + ele.value +" )";
	  return "";
	}
	if ( max > 0 ) min = 0; else { min = max; max = 0; }
	if ( fval <= min || fval >= max )
	  return "La quantité demandée est incorrecte : 2 maximum" + " [" + min + " à " + max + "]\n\n( " + ele.value +" )";
  }
  return "";
}
/*
  CheckAmountAlert( ele, strMax, obl, strDev )
	Test de la validité d'un montant
	ele.value   la chaine saisie
	strMax      Min/Max de controle
	obl         autorise les saisies vides
	strDev      La devise avec Nb de decimales (EUR3 par exemple)
	retourne une chaine, ou un boolean avec Alert()
*/
function CheckAmountAlert( ele, strMax, obl, strDev )
{
var str;
  str = CheckAmount( ele, strMax, obl, strDev );
  if ( str != "" )
  {
    alert( str );
    ele.focus();
    return false;
  }
  else
	return true;
}

/*
  CheckNumber( ele, obl )
	Test de la validité d'un nombre
	ele.value   la chaine saisie
	obl         autorise les saisies vides
	
*/
function CheckNumber( ele, obl )
{
  var str;
  str = CheckAmount( ele, "", obl, "");
  if ( str != "" )
  {
    ele.focus();
    return false;
  }
  else
	return true;
}

/*
 * CheckAmountCouple( eleStart, eleEnd, strMax, strDev )
 */
function CheckAmountCouple( eleStart, eleEnd, strMax, strDev )
{
var start, end;
  
	if ( ! CheckAmountAlert( eleStart, strMax, false ) )
	  return false;
	if ( ! CheckAmountAlert( eleEnd, strMax, false ) )
	  return false;
  
	if ( ( eleStart.value != "" ) && ( eleEnd.value != "" ) )
	{
	  start = ReadAmount( eleStart.value );
	  end = ReadAmount( eleEnd.value );
	  if ( start > end )
		{ alert("Le montant minimum est plus grand ou égal au montant maximum."); eleStart.focus(); return false; }
	}
	return true;
}

/*
  Today( myDate, [myOffset] )
  Retourne la strDate du jour au bon format (ou autre jour si parametre)
  en ajoutant l'offset eventuel.
*/

function Today( myDate, myOffset )
{
  if ( myDate == null )
	myDate = new Date();
  if ( myOffset != null )
	myDate.setDate( myDate.getDate() + myOffset );

  jj = "0"+ myDate.getDate();
  mo = "0"+ (myDate.getMonth()+1);
  an = myDate.getFullYear();


  return jj.substring(jj.length-2,jj.length)+"/"+mo.substring(mo.length-2,mo.length)+"/"+an;

}

function ReadDate( strDate )
{
var jj,mo,an,d2;


  jj = strDate.substring(0,2);
  mo = strDate.substring(3,5);
  an = strDate.substring(6,10);

  d2 = new Date(an, mo-1, jj, 00, 00, 00);
  /*
  d2.setFullYear( an, mo-1, jj );
  d2.setHours(0,0,0,0);
  */
  return d2;
}

function CheckDate( ele, strDelay, obl, nowOk )
{
var jj,mo,an,dele,dmin,dmax,dnow,msgmin,msgmax;

  if ( ele.value == "" )
  {
	if ( obl )
	  return "Saisie de la date obligatoire";
	else
	  return "";
  }
  if ( ele.value.length > 10 || ele.value.length < 8 )
	return "Le format de la date est incorrect" + "\n\n( " + ele.value +" )";


  jj = ele.value.substring(0,2);
  mo = ele.value.substring(3,5);
  an = ele.value.substring(6,10);


  if ( an >=0 && an < 30 )
	an = 2000 + parseInt(an, 10);

  if ( an >= 70 && an <100 )
	an = 1900 + parseInt(an, 10);

  if ( an < 1500 || an > 2500 )
	return "Année incorrecte" + "\n\n( " + ele.value +" )";

  dele = new Date(an, mo-1, jj, 00, 00, 00);
  /*
  dele.setFullYear( an, mo-1, jj );
  dele.setHours( 0, 0, 0, 0 );
  */

  if ( dele.getMonth() == mo-1 && dele.getDate() == jj && dele.getFullYear() == an )
  {

	if ( strDelay == "" )
	{
	  ele.value = Today( dele );
	  return "";
	}
	dmin = new Date();
	dmax = new Date();
	dnow = new Date();
	dmin.setHours(0,0,0,0);
	dmax.setHours(0,0,0,0);
	dnow.setHours(0,0,0,0);

	if ( parseInt(strDelay, 10) >= 0 )
	{
	  dmax.setDate( dmax.getDate() + parseInt(strDelay, 10) );
	  msgmin = (nowOk)?"La date doit être supérieure ou égale à la date du jour":"La date doit être supérieure à la date du jour";
	  msgmax = "La date doit être dans la période autorisée" + " (" + strDelay +")";
	}
	else
	{
	  dmin.setDate( dmin.getDate() + parseInt(strDelay, 10) );
	  msgmin = "La date doit être dans la période autorisée" + " (" + strDelay +")";
	  msgmax = (nowOk)?"La date doit être inférieure ou égale à la date du jour":"La date doit être inférieure à la date du jour";
	}

	if ( !nowOk && dnow.toString() == dele.toString() )
	  return "La date du jour est interdite" + "\n\n( " + ele.value +" )";

	if ( dele >= dmin && dele <= dmax )
	{
	  ele.value = Today( dele );
	  return "";
	}
	if ( dele < dmin )
	  return msgmin + "\n\n( " + ele.value +" )";
	else
	  return msgmax + "\n\n( " + ele.value +" )";
  }
  
  if ( jj > 31 || dele.getDate() !=  jj )
	return "Le format de la date est incorrect\n\nJour incorrect : " + jj + "\n\n( " + ele.value +" )";
  if ( mo > 12 || dele.getMonth() !=  mo -1 )
	return "Le format de la date est incorrect\n\nMois incorrect : " + mo + "\n\n( " + ele.value +" )";
  if ( dele.FullYear() != an )
	return "Le format de la date est incorrect\n\nAnnée incorrecte :" + an + "\n\n( " + ele.value +" )";
}


/*
  CheckDateAlert( ele, strDelay, obl )
  Test de la validité d'une date
  ele.value la chaine saisie
  strDelay delai max autorisé
  obl autorise les saisies vides
  retourne une chaine, ou un boolean avec Alert()
*/
function CheckDateAlert( ele, strDelay, obl, nowOk )
{
var str;

  if ( nowOk == null ) nowOk = true;
  str = CheckDate( ele, strDelay, obl, nowOk );
  if ( str != "" )
  {
	alert( str );
	ele.focus();
	return false;
  }
  else
	return true;
}

function CheckDateCouple( eleStart, eleEnd, strDelay, nowOk )
{

  if ( ! CheckDateAlert( eleStart, strDelay, false, nowOk ) )
	return false;
  if ( ! CheckDateAlert( eleEnd, strDelay, false, nowOk ) )
	return false;

  if ( ( eleStart.value != "") && ( eleEnd.value != "") )
  {
	if( ReadDate( eleStart.value ) > ReadDate( eleEnd.value ) )
	  { alert("La date d'opération de début est plus grande ou égale à la date d'opération de fin."); eleStart.focus(); return false;}
  }
  return true;
}

/*
 * CheckIBAN(NumCompte)
 * Verifier la saisie d'un compte IBAN en recalculant la clé IBAN.
*/
function CheckIBAN(NumCompte)
{
  var again = true;
  var Crest = "";

  NumCompte = NumCompte.toUpperCase();
  NumCompte = NumCompte.substr(4,NumCompte.length-4) + NumCompte.substr(0,4);
  NumCompte = TranslateAlpha2Num(NumCompte);

  Crest = NumCompte;
  CResult = "";

  while( again )
  {
	if ( Crest.length <= 7 )
	{
	  Cpart = Crest;
	  again = false;
	}
	else
	{
	  Cpart = Crest.substr(0,7);
	  Crest = Crest.substr(7,Crest.length-7 );
	}

	Cpart = CResult + Cpart;
	Npart = Cpart * 1;
	NResult = Npart % 97;
	CResult = NResult + "";
  }
  return NResult == 1;
}

/*
 * KeyIBAN(NumCompte,CodePays)
 * Calcul la clé IBAN à partir du BBAN et du code pays du BBAN.
 */
function KeyIBAN(NumCompte, CodePays)
{
  var again = true;
  var Crest = "";

  NumCompte = TranslateAlpha2Num( NumCompte.toUpperCase() + CodePays.toUpperCase() + '00' );

  Crest = NumCompte;
  CResult = "";

  while( again )
  {
	if ( Crest.length <= 7 )
	{
	  Cpart  = Crest;
	  again = false;
	}
	else
	{
	  Cpart = Crest.substr(0,7);
	  Crest = Crest.substr(7,Crest.length-7 );
	}

	Cpart = CResult + Cpart;
	Npart = Cpart * 1;
	NResult = Npart % 97;
	CResult = NResult +"";
  }

  NResult = 98 - NResult;

  if ( NResult < 10 )
	CResult = "0"+ NResult;
  else
	CResult = NResult + "";

  return CResult;
}

function TranslateAlpha2Num(NumCompte)
{
  NumCompte = NumCompte.replace( new RegExp("A","g"),"10");
  NumCompte = NumCompte.replace( new RegExp("B","g"),"11");
  NumCompte = NumCompte.replace( new RegExp("C","g"),"12");
  NumCompte = NumCompte.replace( new RegExp("D","g"),"13");
  NumCompte = NumCompte.replace( new RegExp("E","g"),"14");
  NumCompte = NumCompte.replace( new RegExp("F","g"),"15");
  NumCompte = NumCompte.replace( new RegExp("G","g"),"16");
  NumCompte = NumCompte.replace( new RegExp("H","g"),"17");
  NumCompte = NumCompte.replace( new RegExp("I","g"),"18");
  NumCompte = NumCompte.replace( new RegExp("J","g"),"19");
  NumCompte = NumCompte.replace( new RegExp("K","g"),"20");
  NumCompte = NumCompte.replace( new RegExp("L","g"),"21");
  NumCompte = NumCompte.replace( new RegExp("M","g"),"22");
  NumCompte = NumCompte.replace( new RegExp("N","g"),"23");
  NumCompte = NumCompte.replace( new RegExp("O","g"),"24");
  NumCompte = NumCompte.replace( new RegExp("P","g"),"25");
  NumCompte = NumCompte.replace( new RegExp("Q","g"),"26");
  NumCompte = NumCompte.replace( new RegExp("R","g"),"27");
  NumCompte = NumCompte.replace( new RegExp("S","g"),"28");
  NumCompte = NumCompte.replace( new RegExp("T","g"),"29");
  NumCompte = NumCompte.replace( new RegExp("U","g"),"30");
  NumCompte = NumCompte.replace( new RegExp("V","g"),"31");
  NumCompte = NumCompte.replace( new RegExp("W","g"),"32");
  NumCompte = NumCompte.replace( new RegExp("X","g"),"33");
  NumCompte = NumCompte.replace( new RegExp("Y","g"),"34");
  NumCompte = NumCompte.replace( new RegExp("Z","g"),"35");
  return NumCompte;
}



function CheckInt( ele, strInt, obl )
{
var min,max,val = ele.value;

  if ( val == "" )
  {
	if ( obl )
	  return "Valeur entière obligatoire";
	else
	  return "";
  }

  ival = parseInt(val, 10);
  if ( ival != val )
	return "Nombre incorrect" + "\n\n( " + val +" )";

  if ( strInt != "" )
  {
	max = parseInt(strInt, 10);
	if ( max == 0 )
	{
	  if ( ival < 0 )
		return "Le nombre ne peut pas être négatif\n\n( " + ele.value +" )";
	  return "";
	}
	if ( max > 0 )
	  min = 0;
	else
	{
	  min = max;
	  max = 0;
	}
	if ( ival <= min || ival >= max )
	  return "La quantité demandée est incorrecte : 2 maximum";
  }
  return "";
}

/*
  CheckIntAlert( ele, strInt, obl )
  Test de la validité d'un entier
  ele.value la chaine saisie
  strInt valeur max autorisé
  obl autorise les saisies vides
  retourne une chaine, ou un boolean avec Alert()
*/
function CheckIntAlert( ele, strInt, obl )
{
var str;

  str = CheckInt( ele, strInt, obl );
  if ( str != "" )
  {
	alert( str );
	ele.focus();
	return false;
  }
  else
	return true;
}


function lvtrim( str )
{
var ret, found;

  ret = "";
  found = false;
  for ( var i = 0; i< str.length; i++ )
  {
	var c = str.charAt(i);
	if ( !found && ( c == ' ' || c =='\t' || c == '\n' || c == '\r' ) )
	  continue;
	found = true;
	ret += c;
  }
  return ret;
}

function rvtrim( str )
{
  var ret, found;

  ret = "";
  found = false;
  for ( var i = str.length - 1; i >= 0; i-- )
  {
	var c = str.charAt(i);
	if ( !found && ( c == ' ' || c =='\t' || c == '\n' || c == '\r' ) )
	  continue;
	found = true;
	ret = c + ret;
  }
  return ret;
}

/*
 * vtrim(str)
 * trim directement sur une Value (ie une chaine)
 */
function vtrim( str ) { return lvtrim(rvtrim( str )); }

function ltrim( ele )
{
  ele.value = lvtrim( ele.value );
  return ele.value;
}

function rtrim( ele )
{
  ele.value = rvtrim( ele.value );
  return ele.value;
}

/*
 * trim( ele )
 * trim sur un element (i.e; un objet)
 */
function trim( ele )
{
  if(ele)
  {
    ltrim(ele);
    return rtrim(ele);
  }else return "";
}

function CheckStr( ele, strXXX, obl )
{
  if ( ele.value == "" )
  {
	if ( obl )
	  return "Veuillez renseigner cette zone";
	else
	  return "";
  }
  return "";
}

function CheckStrAlert( ele, strXXX, obl )
{
var str;

  ltrim( ele );
  str = CheckStr( ele, strXXX, obl );
  if ( str != "" )
  {
	alert( str );
	ele.focus();
	return false;
  }
  else
	return true;
}

function TextFormat(text,val1,val2,val3,val4,val5,val6,val7,val8,val9,val10)
{
   var i, message = text

   for ( i = arguments.length-1; i>0; i-- )
   {
	 if ( arguments[i] != "" )
	   message = message.replace("%"+i , arguments[i] );
   }
   return message
}

function TextTranslate( ele, strin, strout )
{
  var v = ele.value;
  var s1, s2;
  for ( var i = 0; i < strin.length; i++ )
  {
	s1 = String.fromCharCode(strin.charCodeAt( i ));
	s2 = String.fromCharCode(strout.charCodeAt( i ));
	while ( v.indexOf( s1 ) != -1 )
	  v = v.replace( s1,s2 );
  }
  ele.value = v;
}

/*
 * pad_right(val,len)
 * Complete une chaine à droite avec des espaces
 */
function pad_right( val, len )
{
  var str = "";

  for ( var i = 1; i <= len; i++ )
	str = str + " ";
  return (val + str).substring(0,len);
}

// strDelai non gere dans cette version
function CheckTime( ele, strDelai, obl )
{
var hh, pp, mm;

  hh = ele.value.substring(0,2);
  pp = ele.value.substring(2,3);
  mm = ele.value.substring(3,5);

  if ( ele.value == "" )
  {
	if ( obl )
	  return "Il faut saisir l'heure\nL'heure doit avoir le format HH:MM";
	else
	  return "";
  }
  if ( pp != ":" )
	return "L'heure doit avoir le format HH:MM" + "\n\n( " + ele.value +" )";

  if ( hh < 0 || hh > 23 || hh == "  " )
	return "L'heure doit être un nombre compris entre 00 et 23" + "\n\n( " + ele.value +" )";
  if ( mm < 0 || mm > 59 || mm == "  " )
	return "Le nombre de minutes doit être compris entre 00 et 59" + "\n\n( " + ele.value +" )";

  return "";
}

/*
  CheckTimeAlert( ele, strDelay, obl )
  Test de la validité d'une heure
  ele.value la chaine saisie
  strDelai delai max autorisé
  obl autorise les saisies vides
  retourne une chaine, ou un boolean avec Alert()
*/
function CheckTimeAlert( ele, strDelai, obl )
{
var str;

  str = CheckTime( ele, strDelai, obl );
  if ( str != "" )
  {
	alert( str );
	ele.focus();
	return false;
  }
  else
	return true;
}

/*
  CheckEmail( adresse )
  Test la validité d'une adresse email
*/
function CheckEmail( adresse )
{
  if(adresse.indexOf(" ",0)>0)
    return false;

  arr = adresse.split("@");
  if( arr.length != 2 )
    return false;
  arr = adresse.split(".");
  if( arr.length < 2 )
    return false;
    return true;
}


/*
 * remplacement de la fonctionnalité alt par AffBulle, pour fonctionnement IE,Mozilla
 */
var posX=0;
posY=0;
function getMousePos(aEvent)
{
  var myEvent = aEvent ? aEvent : window.event;
  if (document.all)
  {
	posX=myEvent.clientX+document.body.scrollLeft+20;
	posY=myEvent.clientY+document.body.scrollTop;
  }
  else
  {
	posX=aEvent.pageX+20;
	posY=aEvent.pageY;
  }
}

document.write("<div id='bubble' style='position:absolute;visibility:hidden;'></div>");

function AffBulle(texte,aEvent)
{
  getMousePos(aEvent);
  document.getElementById("bubble").innerHTML='<table border="1" cellpadding="0" cellspacing="0"><tr><td id="bub"><table border="0"><tr><td id="bub">'+texte+'</td></tr></table></td></tr></table>';

  if (document.all)
  {
    if( document.body.clientWidth+document.body.scrollLeft < posX + document.getElementById("bubble").scrollWidth )
      document.getElementById("bubble").style.left       = document.body.clientWidth-document.getElementById("bubble").scrollWidth+document.body.scrollLeft;
    else
      document.getElementById("bubble").style.left       = posX;
    if( document.body.clientHeight+document.body.scrollTop < posY + document.getElementById("bubble").scrollHeight )
        document.getElementById("bubble").style.top        = document.body.clientHeight-document.getElementById("bubble").scrollHeight+document.body.scrollTop;
    else
      document.getElementById("bubble").style.top        = posY;
  }
  else
  {
    if( document.body.clientWidth < posX + document.getElementById("bubble").scrollWidth )
      document.getElementById("bubble").style.left       = document.body.clientWidth-document.getElementById("bubble").scrollWidth;
    else
      document.getElementById("bubble").style.left       = posX;
    if( document.body.clientHeight < posY + document.getElementById("bubble").scrollHeight )
        document.getElementById("bubble").style.top        = document.body.clientHeight-document.getElementById("bubble").scrollHeight;
    else
      document.getElementById("bubble").style.top        = posY;
  }
  document.getElementById("bubble").style.visibility = "visible";
}

function HideBulle()
{
  document.getElementById("bubble").style.visibility="hidden";
}

function random() { return Math.floor(Math.random()*10); }

/*
 * Affichage du tableau de saisie du code à la souris
 */
function gen_clavier(formulaire,zone)
{
	var tab = new Array(0,1,2,3,4,5,6,7,8,9);
	var index1, index2 , val;
	for (i=0 ; i<50 ; i++)
	{
		index1 = random();
		index2 = random();
		val = tab[index1];
		tab[index1] = tab[index2];
		tab[index2] = val;
	}
	
	document.write('<table><tr><td>');
	for (i=0 ; i<10 ; i=i+2)
		document.write('<input type="button" class="buttoncode" value="'+tab[i]+'" onclick="makepwd(\''+formulaire+'\',\''+zone+'\','+tab[i]+')">'); 
	document.write("</td></tr><tr><td>");
	for (i=1 ; i<10 ; i=i+2)
		document.write('<input type="button" class="buttoncode" value="'+tab[i]+'" onclick="makepwd(\''+formulaire+'\',\''+zone+'\','+tab[i]+')">'); 
	document.write('</td></tr><tr><td><table><tr>');
	document.write('<td><input type="password" readonly="readonly" size="6" maxlength="6" name="'+zone+'" tabindex="-1" ></td>');
	document.write('<td valign="center"><table><tr><td><a href="#" onclick="clearpwd(\''+formulaire+'\',\''+zone+'\');" title="Effacer le code" ><img src="pwdefbtn.gif" border="0"></a></td><td id="btn">&nbsp;<b><strong>Effacer</strong></b></td></tr></table></td>');
	document.write('</tr></table></td></tr></table>');
}

function makepwd(formulaire,zone,val)
{
	document[formulaire][zone].value = document[formulaire][zone].value + val;
}

function clearpwd(formulaire, zone)
{
	document[formulaire][zone].value = "";
}

/*
  Formate le montant passer en parametre, avec un nombre de decimales definies
*/
function valdec_form(ele, val, nbdec)
{
  var arr, dec, ent;
  dec="";
  if(nbdec==null)
    nbdec=0;
  arr = val.split(",");
  if ( arr.length == 2 )
    dec = arr[1];
  ent = arr[0];
  for( i=dec.length; i<nbdec; i++)
  {
    dec = dec + "0";
  }
  ele.value= ent+","+dec;
}
/*
Verifie le nombre maximal de decimales saisies
*/
function check_nbdec(ele, nbdec)
{
  var arr,dec;
  dec="";
  arr = ele.value.split(",");
  if ( arr.length > 2 )
  {  alert(hlp+"Séparateur décimal incorrect" + "\n\n( " + ele.value + " )");
    return false;
  }
  if ( arr.length == 2 )
  {
    dec=arr[1];
    if(dec.length > nbdec)
      alert(TextFormat("Le nombre de décimales saisie ne doit pas être supérieur à %1",nbdec));
  }
}

/*
  formatte une chaine représentant un valeur numérique non formatée
*/
function FormatMonnaie(S, isDec)
{
	if (S=="NaN") return S;
	if(isDec==null)
	  isDec=true;
	var i, j, N;
	var S1="";
	var S2="";
	var sep_decimal=",";
	var sep_millers="";
	if (sep_millers=="") sep_millers=" ";
	
	N=S.indexOf(".");
	if (N==-1) S1=S; else S1=S.substr(0,N);
	S2=""; j=0;
	for ( i=S1.length-1; i>=0; i-- )
	   {
	   	S2=S1.charAt(i) + S2;
	   	j++;
	   	if ((j==3)&&(i>0)) {S2=sep_millers + S2; j=0;}
	   }
	if (S2=="") S2="0";
	if (N==-1)
	  if(isDec)
	    S1="00";
	  else 
	    S1="";
	else 
	  S1=S.substr(N+1,S.length -(N+1));
	if(isDec)
	{
	  switch(S1.length)
	  {
		case 0 : S1="00";
		         break;
		case 1 : S1=S1 + "0";
		         break;
	  }
	}
	if(S1!="")
	  S=S2 + sep_decimal + S1;
	else
	  S=S2;
	
	while ((S.length>0)&&(S.charAt(0)==' ')) S=S.substr(1,S.length-1);
	while ((S.length>0)&&(S.charAt(S.length-1)==' ')) S=S.substr(0,S.length-1);
	return S;
}

/*
  formatte une chaine représentant un valeur numérique non formatée
*/
function FormatMonnaie(S, isDec)
{
	if (S=="NaN") return "N.C.";
	if(isDec==null)
	  isDec=true;
	var i, j, N;
	var S1="";
	var S2="";
	var sep_decimal=",";
	var sep_millers="";
	if (sep_millers=="") sep_millers=" ";
	
	N=S.indexOf(".");
	if (N==-1) S1=S; else S1=S.substr(0,N);
	S2=""; j=0;
	for ( i=S1.length-1; i>=0; i-- )
	   {
	   	S2=S1.charAt(i) + S2;
	   	j++;
	   	if ((j==3)&&(i>0)) {S2=sep_millers + S2; j=0;}
	   }
	if (S2=="") S2="0";
	if (N==-1)
	  if(isDec)
	    S1="00";
	  else 
	    S1="";
	else 
	  S1=S.substr(N+1,S.length -(N+1));
	if(isDec)
	{
	  switch(S1.length)
	  {
		case 0 : S1="00";
		         break;
		case 1 : S1=S1 + "0";
		         break;
	  }
	}
	if(S1!="")
	  S=S2 + sep_decimal + S1;
	else
	  S=S2;
	
	while ((S.length>0)&&(S.charAt(0)==' ')) S=S.substr(1,S.length-1);
	while ((S.length>0)&&(S.charAt(S.length-1)==' ')) S=S.substr(0,S.length-1);
	return S;
}

function ChargerCookie(Nom)
{
	var Valeurs;
	var Valeur;
	var Nom_Item;
	var Valeur_Item;
	var i;
	var j;
	var OK;
				
	Valeurs = document.cookie.split("; ");
	i = 0;
	while (i != Valeurs.length)
		{	
			Valeur = Valeurs[i];
			Nom_Item = Valeur.split("=")[0];
			Valeur_Item = Valeur.split("=")[1];
			if (Nom_Item == Nom) 
				{
					j=0;
					OK = 1;
					while (j != Valeur.length)
						{
							if (Valeur.charAt(j) == '=') 
								{if (j != Valeur.length) OK = 0;}
							j = j+1;
						}
					if (OK == 0) 
						{
							return Valeur_Item;
						}
				}
			i = i+1;	
		}
	return '';
}

function FormatChecked(object)
{
	if (object.checked == true)
		return 'O';
	else
		return 'N';
}


//Création de l'objet XMLHttpRequest en fonction du navigateur
function createXmlHttpRequest(){
  var req = null;
  if (window.XMLHttpRequest) {
    req = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    req = new ActiveXObject("Microsoft.XMLHTTP");
  }
  req.onreadystatechange = function(){
	if (req.readyState == 4){
	  if (req.status == 200){
		//Cette fonction devra etre défini dans chaque page lors de l'appel de la requete
		ReadXmlHttpRequest(req);
	  }
	  else{
		alert("Problem: " + req.statusText);
	  }
	}
  }
  return req;
}

//supprime les zero à droite de la partie décimale, et ecrit dans la page
function supZero(val)
{
  var arr, dec, len, NbZero;
  NbZero=0;
  dec = "";

  arr = val.split(",");
  if ( arr.length == 2 )
  {
    dec = arr[1]+"";
    len=dec.length;
    for( i=len; i>0; i--)
    {
      if(dec.substring(len-NbZero, len-(NbZero+1))=="0")
        NbZero=NbZero+1;
      else
        break;
    }
    if(NbZero>0)
      dec=dec.substring(0,len-NbZero);
     if(dec!="")
       val=arr[0]+","+dec;
     else
       val=arr[0];
  }
  document.write(val);
}

function CheckEndDateAFB160(endAfb160, ele)
{
  var jj, mo, an, endDate;
  
  jj = mo = an = endDate = 0;
  
  if (ele.value.length != 10) {
  	alert("Le format de la date est incorrect" + "\n\n( " + ele.value +" )");
    return false;
  }
  
  
    jj = ele.value.substring(0,2);
    mo = ele.value.substring(3,5);
    an = ele.value.substring(6,10);
  
  
  endDate = an + "" + mo + "" + jj;
  
  if ((endAfb160 - endDate) <= 0) {
    alert("Les virements domestiques ne seront plus possibles à partir du 1er août 2014.\nNous vous invitons à saisir une date d'exécution inférieure ou à réaliser un virement SEPA.");
    return false;
  }
  
  return true;
}