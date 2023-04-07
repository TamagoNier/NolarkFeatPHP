 <form id="form_contact" name="form_contact" action="../includes/inscriptionNexsLetter.php" method="POST">
     <div>
         <label for="i_email">Votre e-mail :</label> 
         <input type="email" name="i_email" id="i_email" size="35" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required>
         <div class="input-validation">    
         </div>
     </div>
     <div>
         <input type="checkbox" name="chk_concnent" id="chk_concent" value="concent">
         <label for="chk_darts">
         VOUS CONCENTEZ A L'UTILISATION DES DONNEES    
         </label>
     </div>
 </form>