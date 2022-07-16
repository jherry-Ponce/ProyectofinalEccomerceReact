import '../../../../assets/Login2.css';
export const FromRegistrol = () =>{
    return(
        <div className="login mt-2">
        <div className="formlogin" id="register-form">
            <form name="registration" method="post" action="/account/create"id="">
            
                <div className='row'>
                <div className="col-sm-6">
                    <label className="form-label required" >Nombre</label>
                    <input type="text"required="required" placeholder="Ej: fdsfds" autoComplete="given-name" className="form-control" />  
                </div>
                <div className="col-sm-6">
                    <label className="form-label required">Apellido</label>
                    <input type="text"required="required"placeholder="Ej: sfdsfs" autoComplete="family-name" className="form-control" />
                </div> 
                <div className="col-sm-6">
                    <label className="form-label required">Email</label>
                    <input type="email"required="required" placeholder="Ej: fdfdfssd@mail.com" autoComplete="email" className="form-control" />
                </div>
                <div className="col-sm-6">
                    <label className="form-label required">Contraseña</label>
                    <input type="password"required="required" placeholder="" validate-password="" className="form-control" ng-model="password" data-toggle-password="" />
                </div>
                <div className="col-sm-6">
                    <label className="form-label" >DNI</label>
                    <input type="text"className="form-control" />
                </div>
                

                
                <div className="row mt-4">
                    
                    
                    <input type="checkbox"className="formc col-sm-2" ng-model="subscribedToNewsletter" value="1" />
                    <label className="form-label col-sm-10">
                        Autorizo recibir comunicaciones promocionales y autorizo el uso de mi información para <a href="#a">fines adicionales</a>.
                    </label>
                    
                    

                    <input type="checkbox"required="required" className="formc col-sm-2" ng-model="acceptTerms" value="1" />
                    <label className="form-label col-sm-10">Declaro que he leído y acepto la nueva <a href="#a" target="_blank" >Política de Privacidad</a> y los <a href="#a" target="_blank">Términos y Condiciones</a> de Linio.
                    </label>
                    
                </div>
            </div>

            <button type="submit" className="btn btn-security col-12 bg-secondary text-white mt-5" ng-disabled="!registration.$valid">Completar registro</button>
            <input type="hidden" id="registration" name=" " value=" "/>
            </form>
        </div>
    </div>
    )
}