<template>
<div>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-12">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <router-link  :to="{name:'panelInicio'}">INICIO</router-link>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">PANEL DE BIENVENIDA</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>
                    </div>
                    <div class="card-body" style="display: block;">
                        You can Change Pace Styles, Checkout the <a href="https://adminlte.io/docs/3.1/" target="_blank" rel="noopener noreferrer">AdminLTE Official Docs</a> in Online.
                        <br>
                        Start creating your amazing application!
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</template>
